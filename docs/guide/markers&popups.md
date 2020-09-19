# Markers and Popups

## Marker

The Marker component is a wrapper around the [Mapbox GL Marker API](https://docs.mapbox.com/mapbox-gl-js/api/#marker).

```vue
<template>
  <MglMap
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglMarker :coordinates="coordinates" color="blue" />
  </MglMap>
</template>

<script>
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      mapStyle: "mapbox://styles/mapbox/basic-v10",
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>
```

### Props

- `color {String}` Set the color of the default marker (not applicable when using the `marker` slot)
- `coordinates {Array}` The GeoJSON coordinates for marker placement on the map
- `offset {Object, Array}` Display the marker at an offset distance from the coordinates

Full list of props you cab see on [API page](/api/marker.md#props)

### Slots

The Marker component has two slots: the `marker` slot and default slot used for popup.

#### The `marker` slot

The `marker` slot allows you to customize the look of the marker. Here is an example of using the [Vuetify `v-icon` component](https://vuetifyjs.com/en/components/icons) instead of the default marker icon:

```vue
<template>
  <MglMap
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglMarker :coordinates="coordinates">
      <v-icon slot="marker">mdi-map-marker</v-icon>
    </MglMarker>
  </MglMap>
</template>

<script>
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },

  data() {
    return {
      mapStyle: "mapbox://styles/mapbox/basic-v10",
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>
```

### Default slot

Default slot allows you to specify content to display in a Mapbox popup when the marker is clicked. See [below](#markers-popups-together)

## Popup

The Popup component is wrapper around the [Mapbox GL Popup API](https://docs.mapbox.com/mapbox-gl-js/api/#popup).

You can specify content inside popup in default slot. It can be HTML or Vue component.
In this example [Vuetify card component](https://vuetifyjs.com/en/components/cards) used as a content for popup:

```vue
<template>
  <MglMap
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglPopup :coordinates="coordinates" anchor="top">
      <VCard> <div>Hello, I'm popup!</div> </VCard>
    </MglPopup>
  </MglMap>
</template>

<script>
import { MglMap, MglPopup } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglPopup
  },
  data() {
    return {
      mapStyle: "mapbox://styles/mapbox/basic-v10",
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>
```

If you set `onlyText` prop to `true` content in Popup default slot will be treated as plain text. It can be useful if you loading popup content from external untrusted source.

Popups added to the map is hidden by default. If you want to show the popup immediately you need to set the prop `showed` to `true`

### Props

- `showed {Boolean}` If `true`, the popup shows immediately after component is created.

- `closeButton {Boolean}` If `true`, a close button will appear in the top right corner of the popup.

- `closeOnClick {Boolean}` If true, the popup will closed when the map is clicked.

- `coordinates {Array}` The GeoJSON coordinates for popup placement on the map. If popup used inside marker this prop will be ignored.

- `anchor {string}` prop specifies the part of the Popup that should be positioned closest to the coordinates point.

Full list of props you can see on [API page](/api/popup.md#props)

## Markers & Popups together

Popup often used inside of map markers. You can achive this by passing Popup inside Marker in default slot:

```vue
<template>
  <MglMap
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglMarker :coordinates="coordinates">
      <MglPopup>
        <VCard>
          <div>Hello, I'm popup!</div>
        </VCard>
      </MglPopup>
    </MglMarker>
  </MglMap>
</template>

<script>
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },

  data() {
    return {
      mapStyle: "mapbox://styles/mapbox/basic-v10",
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>
```

In this case, Popup will be automatically bound to Marker. You can use `togglePopup` Marker method to toggle visibility of bound Popup.
Take note that Popup `coordinates` prop will be ignored.
