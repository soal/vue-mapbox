# Markers

The Marker component is a wrapper around the [Mapbox GL Marker API](https://www.mapbox.com/mapbox-gl-js/api/#marker).

```vue
<template>
  <mgl-map
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <mgl-marker :coordinates="coordinates" color="blue"></mgl-marker>
  </mgl-map>
</template>

<script>
export default {
  data: () => ({
    mapStyle: 'mapbox://styles/mapbox/basic-v10',
    coordinates: [ -111.549668, 39.014 ]
  })
}
</script>
```

## Props

- `color {String}` Set the color of the default marker (not applicable when using the `marker` slot)
- `coordinates {Array}` The GeoJSON coordinates for marker placement on the map
- `offset {Object, Array}` Display the marker at an offset distance from the coordinates

## Slots

The Marker component has two slots: the `marker` slot and the `popup` slot.

### The `marker` slot

The `marker` slot allows you to customize the look of the marker.  Here is an example of using the [Vuetify `v-icon` component](https://vuetifyjs.com/en/components/icons) instead of the default marker icon:

```vue
<template>
  <mgl-map
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <mgl-marker :coordinates="coordinates">

      <v-icon slot="marker">mdi-map-marker</v-icon>

    </mgl-marker>
  </mgl-map>
</template>

<script>
export default {
  data: () => ({
    mapStyle: 'mapbox://styles/mapbox/basic-v10',
    coordinates: [ -111.549668, 39.014 ]
  })
}
</script>
```

### The `popup` slot

The `popup` slot allows you to specify content to display in a Mapbox popup when the marker is clicked.

```vue
<template>
  <mgl-map
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <mgl-marker :coordinates="coordinates">

      <div slot="popup">
        <h1>This is a heading</h1>
        <p>This is a p</p>
        <button @click.prevent="performSomeAction">Do Something</button>
      </div>

    </mgl-marker>
  </mgl-map>
</template>

<script>
export default {
  data: () => ({
    mapStyle: 'mapbox://styles/mapbox/basic-v10',
    coordinates: [ -111.549668, 39.014 ]
  })
}
</script>
```
