# Layers and sources

## Adding layers

Geographic features on the map draws as layers. Every layer must have a source which contains data for layer (for exmaple, GeoJSON object). You can read more about sources in Mapbox GL JS [docs](https://www.mapbox.com/mapbox-gl-js/api/#sources).

Vue-mapbox exposes layers as Vue components and source passed to layer as prop. There is several layers types for drawning different types of sources.
For example adding a layer with GeoJSON data:

```vue
<template>
  <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
    <MglNavigationControl position="top-right" />
    <!-- Adding navigation control -->
    <MglGeojsonLayer
      type="fill"
      :sourceId="geoJsonSource.properties.id"
      :layerId="geoJsonSource.properties.id"
      :source.sync="geoJsonSource"
    />
  </MglMap>
</template>
```

```javascript
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
      }
    };
  }
};
```

In this example `geoJsonSource` can be an `object`, representing GeoJSON feature or `string` with URL to GeoJSON.

Sources are stored in Mapbox GL JS `Map` object by `sourceId`. If you sure that source already added to map, you can skip `source` prop and just pass `sourceId` and use same source for different layers. If you try to add same source twice it raises an error, but you can set `replaceSource` prop to `true` to just replace old source with new one passed in `source` prop.

By default when Layer components destroing, it removes source from map. If you want to keep source in Map (for e.g. for future using or if other layers use this source), set `clearSource` prop to `false`.

## Updating layer state with props

As you can expect, layers watch for their props and translate changes to map accordingly. For exmaple, if you change content of `filter` prop in GeojsonLayer, changes will be automatically applied to layer on the map.

## Layer getters

GeoJSON and Vector layers has getters for their features: `.getRenderedFeatures(filter?)`, `.getSourceFeatures(geometry?, filter?)` and `.getFeatureState(featureId)`. They works similiar to [`.queryRenderedFeatures()`](https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures) and [`.querySourceFeatures()`](https://www.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures) Map mthods, but returns features onnly in source of current layer.

## Layer methods

Layer components has methods `move()` and `remove()`.
First moves a layer to a different z-position. Second destroys component removes layer and source from map event if layer created with prop `clearSource: false`.

## Layer events

Layers emits events when loading data or on user interaction like `click`. See full list of events in [API section](/api/Layers/README.md#events)
