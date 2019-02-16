# VectorLayer

## Props

All common [layers props](/api/Layers/README.md#props)

### `source`

- **Type:** `Object | String`
- **Non-Synced**
- **Description:** A vector tile source.
- **See:** `Vector source` in [Mapbox Style Spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources-vector)

## Computed getters

### `getSourceFeatures(filter?)`

- **Arguments:**
  - `filter` `Array` A filter to limit query results.
- **Description** Returns an array of GeoJSON Feature objects from assosiated source filtered by `filter`.
- **See** `.querySourceFeatures()` [map method](https://docs.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures)

### `getRenderedFeatures(geometry, filter)`

- **Arguments:**
  - `filter` `Array` A filter to limit query results.
  - `geometry` `Array | Object` The geometry of the query region.
- **Description** Returns an array of visible GeoJSON Feature objects from assosiated source filtered by `filter`.
- **See** `.queryRenderedFeatures()` [map method](https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures)

## Methods

### `setFeatureState(featureId, state)`

- **Arguments:**
  - `featureId` `String | Number` Feature identifier.
  - `state` `Object` A set of key-value pairs. The values should be valid JSON types.
- **Description** Sets the state of a feature. The state object is merged in with the existing state of the feature.
- **See** `.setFeatureState()` [map method](https://docs.mapbox.com/mapbox-gl-js/api/#map#setfeaturestate)

### `getFeatureState(featureId)`

- **Arguments:**
  - `featureId` `String | Number` Feature identifier.
- **Description** Gets the state of a feature.
- **See** `.getFeatureState()` [map method](https://docs.mapbox.com/mapbox-gl-js/api/#map#getfeaturestate)

## Events

All common layer [events](/api/Layers/#events)
