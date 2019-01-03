# Vue-mapbox plugin

## Register Vue-Mapbox as Vue plugin

```javascript
Vue.use(VueMapbox, options);
```

## Options

### `mapboxgl`

- **Type** `Object`
- **Description:** Mapbox GL JS module

### `plugins`

- **Type** `Array<Object>`
- **Description:** Vue-Mapbox Plugins

## Example

```javascript
import VueMapbox from "vue-mapbox";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Mapbox from "mapbox-gl";

Vue.use(VueMapbox, {
  mapboxgl: Mapbox,
  plugins: [{ mapboxGeocoder: MapboxGeocoder }]
});
```
