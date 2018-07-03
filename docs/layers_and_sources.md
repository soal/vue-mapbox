# Layers and sources
Geographic features on the map draws as layers. Every layer must have a source which contains data for layer (for exmaple, GeoJSON object). You can read more about sources in Mapbox GL JS [documentation](https://www.mapbox.com/mapbox-gl-js/api/#sources).

Vue-mapbox exposes layers as Vue components and source passed to layer as prop. There is several layers types for drawning different types of sources.
For example adding a layer with GeoJSON data:

```html
<template>
  <mgl-map
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <mgl-navigation-control position="top-right"/> <!-- Adding navigation control-->
    <mgl-geojson-layer
      type="fill"
      :sourceId="geoJsonSource.properties.id"
      :layerId="geoJsonSource.properties.id"
      :source.sync="geoJsonSource"
    >
    </mgl-geojson-layer>

  </mgl-map>
</template>
```

```javascript
import {
  MglMap,
  MglNavigationControl,
  MglGeojsonLayer
} from 'vue-mapbox'

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken: 'some_token',
      mapStyle: 'style_object',
      geoJsonSource: {
        //...some GeoJSON object
      }
    }
  }
}
```
