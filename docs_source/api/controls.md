# Map control components

## AttributionControl

An AttributionControl control presents the map's attribution information.

### Props

### `compact`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true force a compact attribution
- **See:** `options.compact` in [AttributionControl](https://docs.mapbox.com/mapbox-gl-js/api/#attributioncontrol)

### `customAttribution`

- **Type:** `string, Array<string>?`
- **Default:** `true`
- **Non-Synced**
- **Description:** String or strings to show in addition to any other attributions.
- **See:** `options.customAttribution` in [AttributionControl](https://docs.mapbox.com/mapbox-gl-js/api/#attributioncontrol)

## FullscreenControl

Creates a button on the map to toggle fulscreen mode.

### Props

### `container`

- **Type:** `HTMLElement`
- **Non-Synced**
- **Description:** DOM element which should be made full screen. By default, the map container element will be made full screen.
- **See:** `options.container` in [FullscreenControl](https://docs.mapbox.com/mapbox-gl-js/api/#fullscreencontrol)

## GeolocateControl

Provides a button that uses the browser's geolocation API to locate the user on the map.

### Props

### `positionOptions`

- **Type:** `Object`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `fitBoundsOptions`

- **Type:** `Object`
- **Default:** `{ maxZoom:15 }`
- **Non-Synced**
- **Description:** A fitBounds options object to use when the map is panned and zoomed to the user's location.
- **See:** `options.fitBoundsOptions` in [GeolocateControl](https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `trackUserLocation`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If true the Geolocate Control becomes a toggle button and when active the map will receive updates to the user's location as it changes.to the user's location.
- **See:** `options.trackUserLocation` in [GeolocateControl](https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `showUserLocation`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** By default a dot will be shown on the map at the user's location. Set to false to disable.
- **See:** `options.showUserLocation` in [GeolocateControl](https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### Methods

### `.trigger()`

- **Description:** Trigger a geolocation
- **Returns:** `boolean`
- **See:** [trigger](https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol#trigger) GeolocateControl method

## NavigationControl

### Props

### `showCompass`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true the compass button is included.
- **See:** `options.showCompass` in [NavigationControl](https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)

### `showZoom`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true the zoom-in and zoom-out buttons are included.
- **See:** `options.showZoom` in [NavigationControl](https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)

## ScaleControl

### Props

### `maxWidth`

- **Type:** `Number`
- **Default:** `100`
- **Non-Synced**
- **Description:** The maximum length of the scale control in pixels.
- **See:** `options.maxWidth` in [ScaleControl](https://docs.mapbox.com/mapbox-gl-js/api/#scalecontrol)

### `unit`

- **Type:** `String, "imperial" | "metric" | "nautical"`
- **Default:** `metric`
- **Non-Synced**
- **Description:** Unit of the distance
- **See:** `options.unit` in [ScaleControl](https://docs.mapbox.com/mapbox-gl-js/api/#scalecontrol)
