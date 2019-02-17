# Layers and sources

## Adding layers

Geographic features on the map draws as layers.
Layer use `source` object that contains data for layer (for example, GeoJSON object). Source must be added to map and several layers can use common `source` and draw it's data differently.
Also, layer has own configuration object that declares how layer draws on the map. You can read more about it in Mapbox GL JS docs for [sources](https://docs.mapbox.com/mapbox-gl-js/api/#sources) ans [layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers).

Vue-mapbox exposes layers as Vue components.
`source` and `layer` configuration object passed to layer component as props. There is several layers types for drawing different types of sources.
For example adding a layer with GeoJSON data:

```vue
<template>
  <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
    <!-- Adding navigation control -->
    <MglNavigationControl position="top-right" />
    <!-- Adding GeoJSON layer -->
    <MglGeojsonLayer
      :sourceId="geoJsonSource.id"
      :source="geoJsonSource"
      layerId="myLayer"
      :layer="geoJsonlayer"
    />
  </MglMap>
</template>

<script>
import { MglMap, MglNavigationControl, MglGeojsonLayer } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "style_object",
      geoJsonSource: {
        //...some GeoJSON object
      },
      geoJsonLayer: {
        //...some GeoJSON layer configuration object
      }
    };
  }
};
</script>
```

In this example `geoJsonSource` can be an `object`, representing GeoJSON feature or `string` with URL to GeoJSON.

Sources are stored in Mapbox GL JS `Map` object by `sourceId`. If you sure that source already added to map, you can skip `source` prop and just pass `sourceId` and use same source for different layers. If you try to add same source with same `id` twice, VueMapbox would just use `source` that already existed on the map, but you can set `replaceSource` prop to `true` to just replace old source with new one passed in `source` prop.

By default when Layer components destroying, it removes source from map. If you want to keep source on Map (for example, for future using or if other layers use this source), set `clearSource` prop to `false`.

## Reactivity

Layer components watch for changes in object in their `layer` prop and translate changes to map accordingly. For example, if you change content of `filter` prop in GeojsonLayer, changes will be automatically applied to layer on the map. Not all layer settings can be set dynamically, currently reactive properties are `minzoom`, `maxzoom`, `paint`, `layout` and `filter`.

## Layer getters

GeoJSON and Vector layers has getters for their features: `.getRenderedFeatures(filter?)`, `.getSourceFeatures(geometry?, filter?)` and `.getFeatureState(featureId)`. They works similar to [`.queryRenderedFeatures()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures) and [`.querySourceFeatures()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures) Map methods, but returns features only from source of current layer.

## Layer methods

Layer components has methods `move()` and `remove()`.
First moves a layer to a different z-position. Second destroys component and removes layer and source from map event if layer created with prop `clearSource: false`.

## Layer events

Layers emits events when loading data or on user interaction like `click`. See full list of events in [API section](/api/Layers/README.md#events)

## Migration from 0.1

In versoin `0.1` layer and source options was exposed via separate props.
Since `0.2` there are consolidated `source` object props for data source and `layer` for layer options. See [sources](https://docs.mapbox.com/mapbox-gl-js/api/#sources) and [layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers) in Mapbox GL JS docs.
