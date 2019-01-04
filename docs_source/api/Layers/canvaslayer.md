# CanvasLayer

## Props

### `canvas`

- **Type:** `HTMLCanvasElement, String`
- **Default** `null`
- **Non-Synced**
- **Description:** Canvas source from which to read pixels. Can be a string representing the ID of the canvas element. If omitted, Vue-Mapbox creates canvas element.
- **See:** `canvas` in [Mapbox API CanvasSource](https://www.mapbox.com/mapbox-gl-js/api/#canvassource)

### `coordinates`

- **Type:** `Array`
- **Required**
- **Non-Synced**
- **Description:** Four geographical coordinates denoting where to place the corners of the canvas, specified in [longitude, latitude] pairs.
- **See:** `coordinates` in [Mapbox API CanvasSource](https://www.mapbox.com/mapbox-gl-js/api/#canvassource)

### `animate`

- **Type:** `Boolean`
- **Default** `true`
- **Non-Synced**
- **Description:** Whether the canvas source is animated.
- **See:** `animate` in [Mapbox API CanvasSource](https://www.mapbox.com/mapbox-gl-js/api/#canvassource)

### `width`

- **Type:** `Number`
- **Default** `100`
- **Non-Synced**
- **Description:** Width of canvas element. Can be omitted if existed canvas passed directly in `canvas` prop.

### `height`

- **Type:** `Number`
- **Default** `100`
- **Non-Synced**
- **Description:** Height of canvas element. Can be omitted if existed canvas passed directly in `canvas` prop.

## Events

All common layer [events](/api/Layers/#events)
