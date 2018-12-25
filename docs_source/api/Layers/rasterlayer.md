# RasterLayer

## Props

### `url`

- **Type:** `String`
- **Default** `undefined`
- **Non-Synced**
- **Description:** A URL to a TileJSON resource as source for this layer. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`.
- **See:** `url` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-url)

### `tiles`

- **Type:** `Array`
- **Default** `undefined`
- **Non-Synced**
- **Description:** An array of one or more tile source URLs, as in the TileJSON spec.
- **See:** `tiles` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-tiles)

### `tileSize`

- **Type:** `Number`
- **Default** `512`
- **Non-Synced**
- **Description:** The minimum visual size to display tiles for this layer in pixels.
- **See:** `tileSize` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-tileSize)

### `tilesMinZoom`

- **Type:** `Number`
- **Default** `0`
- **Non-Synced**
- **Description:** Minimum zoom level for which tiles are available, as in the TileJSON spec.
- **See:** `minzoom` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-minzoom)

### `tilesMaxZoom`

- **Type:** `Number`
- **Default** `22`
- **Non-Synced**
- **Description:** Maximum zoom level for which tiles are available, as in the TileJSON spec.
- **See:** `maxzoom` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-maxzoom)

### `bounds`

- **Type:** `Array`
- **Non-Synced**
- **Description:** An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: [sw.lng, sw.lat, ne.lng, ne.lat].
- **See:** `bounds` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-bounds)

### `scheme`

- **Type:** `String`
- **Non-Synced**
- **Description:** Influences the y direction of the tile coordinates.
- **See:** `scheme` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-scheme)

### `attribution`

- **Type:** `String`
- **Non-Synced**
- **Description:** Contains an attribution to be displayed when the map is shown to a user.
- **See:** `attribution` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-attribution)

## Events

All common layer [events](/api/Layers/#events)
