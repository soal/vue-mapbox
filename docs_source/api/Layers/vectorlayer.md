# VectorLayer

## Props

### `url`

- **Type:** `String`
- **Default** `undefined`
- **Non-Synced**
- **Description:** A URL to a TileJSON resource as source for this layer. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`.
- **See:** `url` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector)

### `tiles`

- **Type:** `Array`
- **Default** `[]`
- **Non-Synced**
- **Description:** An array of one or more tile source URLs, as in the TileJSON spec.
- **See:** `tiles` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-tiles)

### `tilesMinZoom`

- **Type:** `Number`
- **Default** `0`
- **Non-Synced**
- **Description:** Minimum zoom level for which tiles are available, as in the TileJSON spec.
- **See:** `minzoom` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-minzoom)

### `tilesMaxZoom`

- **Type:** `Number`
- **Default** `22`
- **Non-Synced**
- **Description:** Maximum zoom level for which tiles are available, as in the TileJSON spec.
- **See:** `maxzoom` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-maxzoom)

### `sourceLayer`

- **Type:** `String`
- **Required**
- **Non-Synced**
- **Description:** Layer to use from a vector tile source.
- **See:** `source-layer` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-source-layer)

### `bounds`

- **Type:** `Array`
- **Non-Synced**
- **Description:** An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: [sw.lng, sw.lat, ne.lng, ne.lat].
- **See:** `bounds` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-bounds)

### `scheme`

- **Type:** `String`
- **Non-Synced**
- **Description:** Influences the y direction of the tile coordinates.
- **See:** `scheme` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-scheme)

### `attribution`

- **Type:** `String`
- **Non-Synced**
- **Description:** Contains an attribution to be displayed when the map is shown to a user.
- **See:** `attribution` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-attribution)

## Computed getters

### `getSourceFeatures(filter?)`

- **Arguments:**
  - `filter` `Array` A filter to limit query results.
- **Description** Returns an array of GeoJSON Feature objects from assosiated source filtered by `filter`.
- **See** `.querySourceFeatures()` [map method](https://www.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures)

### `getRenderedFeatures(geometry, filter)`

- **Arguments:**
  - `filter` `Array` A filter to limit query results.
  - `geometry` `Array | Object` The geometry of the query region.
- **Description** Returns an array of visible GeoJSON Feature objects from assosiated source filtered by `filter`.
- **See** `.queryRenderedFeatures()` [map method](https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures)

## Methods

### `setFeatureState(featureId, state)`

- **Arguments:**
  - `featureId` `String | Number` Feature identifier.
  - `state` `Object` A set of key-value pairs. The values should be valid JSON types.
- **Description** Sets the state of a feature. The state object is merged in with the existing state of the feature.
- **See** `.setFeatureState()` [map method](https://www.mapbox.com/mapbox-gl-js/api/#map#setfeaturestate)

### `getFeatureState(featureId)`

- **Arguments:**
  - `featureId` `String | Number` Feature identifier.
- **Description** Gets the state of a feature.
- **See** `.getFeatureState()` [map method](https://www.mapbox.com/mapbox-gl-js/api/#map#getfeaturestate)

## Events

All common layer [events](/api/Layers/#events)
