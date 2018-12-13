# Layers and sources

## Adding layers

Geographic features on the map draws as layers. Every layer must have a source which contains data for layer (for exmaple, GeoJSON object). You can read more about sources in Mapbox GL JS [docs](https://www.mapbox.com/mapbox-gl-js/api/#sources).

Vue-mapbox exposes layers as Vue components and source passed to layer as prop. There is several layers types for drawning different types of sources.
For example adding a layer with GeoJSON data:

```vue{2}
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

```javascript{2}
import { MglMap, MglNavigationControl, MglGeojsonLayer } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
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

## Layer getters

GeoJSON and Vector layers has getters for they features.

## Layer methods

Layer components has methods `move()`
