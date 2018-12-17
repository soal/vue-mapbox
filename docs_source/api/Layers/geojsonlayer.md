# GeojsonLayer

## Props

### `source`

- **Type:** `Object`
- **Required**
- **Non-Synced**A source containing GeoJSON.
- **Description:** sources.
- **See:** `GeoJSONSource` in [Mapbox API Docs](https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource)

### `type`

- **Type:** `String` `"fill" | "line" | "symbol" |"circle" | "fill-extrusion" | "raster" | "background" | "heatmap"`
- **Required**
- **Non-Synced**
- **Description:** Rendering type of this layer.
- **See:** `type` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-type)

### `cluster`

- **Type:** `Boolean`
- **Default** `false`
- **Non-Synced**
- **Description:** If the data is a collection of point features, setting this to true clusters the points by radius into groups.
- **See:** `cluster` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-cluster)

### `clusterMaxZoom`

- **Type:** `Number`
- **Default** `14`
- **Non-Synced**
- **Description:** Max zoom on which to cluster points if clustering is enabled.
- **See:** `clusterMaxZoom` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-clusterMaxZoom)

### `clusterRadius`

- **Type:** `Number`
- **Default** `50`
- **Non-Synced**
- **Description:** Radius of each cluster if clustering is enabled.
- **See:** `clusterRadius` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-clusterRadius)

### `lineMetrics`

- **Type:** `Boolean`
- **Default** `false`
- **Non-Synced**
- **Description:** Whether to calculate line distance metrics.
- **See:** `lineMetrics` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-lineMetrics)

### `buffer`

- **Type:** `Boolean`
- **Default** `false`
- **Non-Synced**
- **Description:** Size of the tile buffer on each side.
- **See:** `buffer` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-buffer)

### `tolerance`

- **Type:** `Boolean`
- **Default** `false`
- **Non-Synced**
- **Description:** Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance).
- **See:** `tolerance` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-tolerance)

### `generateId`

- **Type:** `Boolean`
- **Default** `false`
- **Non-Synced**
- **Description:** Whether to generate ids for the geojson features.
- **See:** `generateId` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-generateId)

### `attribution`

- **Type:** `String`
- **Default** `undefined`
- **Non-Synced**
- **Description:** Contains an attribution to be displayed when the map is shown to a user.
- **See:** `attribution` [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-attribution)

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
