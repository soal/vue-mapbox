# Layers common

## Props

#### Props for Mapbox GL source

### `sourceId`

- **Type:** `String`
- **Required**
- **Non-Synced**
- **Description:** The ID of the source to add. Must not conflict with existing sources. .
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

#### Props for Mapbox GL layer

### `layerId`

**Type** `String`
**Required**

### `metadata`

- **Type:** `Object`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `refLayer`

- **Type:** `String`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `source-layer`

- **Type:** `String`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `minZoom`

- **Type:** `Number`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `maxZoom`

- **Type:** `Number`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `paint`

- **Type:** `Object`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `layout`

- **Type:** `Object`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

### `before`

- **Type:** `Object`
- **Default:** `{ enableHighAccuracy: false, timeout: 6000}`
- **Non-Synced**
- **Description:** A Geolocation API PositionOptions object.
- **See:** `options.positionOptions` in [GeolocateControl](https://www.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)

#### Props for Vue-Mapbox component

### `clearSource`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If `true`, component will remove layer source from map on destroy

### `replaceSource`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If source passed to 'source' prop of layer component already added ot the map, it will generate error event. If `replaceSource` is `true` source will be replaced with new instead.

### `replace`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If `true`, replaces existing layer with same id. Otherwise, error returns.

## Computed properties

### `sourceLoaded`

- **Type** `Boolean`
- **Description** Flag that indicated if layer source already loaded

### `mapLayer`

- **Type** `Object`
- **Description** Mapbox GL layer object
- **See** [`.getLayer`](https://www.mapbox.com/mapbox-gl-js/api/#map#getlayer) map method

### `mapSource`

- **Type** `Object`
- **Description** Source for this layer
- **See** [`Mapbox GL source`](https://www.mapbox.com/mapbox-gl-js/api/#sources)

## Methods

### `.move()`

### `.remove()`

## Events

### `@mousedown`

### `@mouseup`

### `@click`

### `@dblclick`

### `@mousemove`

### `@mouseenter`

### `@mouseleave`

### `@mouseover`

### `@mouseout`

### `@contextmenu`

### `@touchstart`

### `@touchend`

### `@touchcancel`
