---
home: true
heroImage: /logo.svg
actionText: Get Started →
actionLink: /guide/
features:
  - title: Declarative style
    details: You can use map elements like layers, markers, popups as Vue components and control them via synchronized props
  - title: Vuefied
    details: Map elements declared as components respect Vue lifecycle, emit map events like Vue events and can be used in OOP-style

  - title: Promisified async actions
    details: You can do async map operations and get results in Promise without messing with map events and figuring out what action cause it
footer: MIT Licensed
---

If you like long story, check out [blog post](https://soal.red/reasoning-behind-vue-mapbox/)

```vue
<template>
  <MglMap
    container="map-test"
    :center.sync="center"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
  >
    <MglMarker
      :coordinates.sync="markerCoordinates"
      color='green'
    />
    <MglGeojsonLayer
      type="fill"
      :sourceId="sourceId"
      :layerId="layerId"
      :source="geojson"
      @click="handleClick"
    />
  </MglMap>
</temaplate>

<script>
import {
  MglMap,
  MglMarker,
  MglGeojsonLayer
} from 'vue-mapbox'

export default {
  name: 'App',
  data() {
    return {
      accessToken: 'some_token',
      mapStyle: 'mapbox://map_style',
      geojson: { /* … some geojson */}
      layerId: 'firstLayer',
      sourceId: 'firstSource',
      markerCoordinates='[50, 50]'
    }
  }
}
</script>
```

::: tip Dependencies
[Vue.js 2.5+](https://github.com/vuejs/vue)  
[Mapbox GL JS 0.51+](https://github.com/mapbox/mapbox-gl-js)  
[map-promisified](https://github.com/soal/map-promisified)
:::

::: tip Size
~ 15 kB minified and gzipped
:::

::: warning Browser compatibility
_Coming soon_
:::
