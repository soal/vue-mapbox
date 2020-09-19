# GeojsonLayer

## Props

All common [layers props](/api/Layers/README.md#props)

### `source`

- **Type:** `Object | String`
- **Non-Synced**
- **Description:** A source containing GeoJSON or URL to it.
- **See:** `GeoJSONSource` in [Mapbox API Docs](https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource)

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

### `getClusterExpansionZoom(clusterId)`

- **Arguments:**
  - `clusterId` `Number` The value of the cluster's cluster_id property.
- **Description** For clustered sources, fetches the zoom at which the given cluster expands and returns `Promise` with zoom level as payload.
- **See** `.getClusterExpansionZoom()` [GeoJSONSource method](https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterexpansionzoom)

### `getClusterChildren(clusterId)`

- **Arguments:**
  - `clusterId` `Number` The value of the cluster's cluster_id property.
  - `limit` `Number` The maximum number of features to return.
  - `offset` `Number` The number of features to skip (e.g. for pagination).
- **Description** For clustered sources, fetches the original points that belong to the cluster and returns `Promise` with an `Array` of GeoJSON features as payload.
- **See** `.getClusterChildren()` [GeoJSONSource method](https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterchildren)

### `getClusterLeaves(clusterId, limit, offset)`

- **Arguments:**
  - `filter` `Array` A filter to limit query results.
  - `geometry` `Array | Object` The geometry of the query region.
- **Description** Returns `Promise` with an array of visible GeoJSON Feature objects from assosiated source filtered by `filter` in the payload.
- **See** `.getClusterLeaves()` [GeoJSONSource method](https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterleaves)

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

### `removeFeatureState(featureId?, sourceLayer?, key?)`

- **Arguments:**
  - `featureId` `String | Number` Feature identifier.
  - `sourceLayer` `string` Source layer id.
  - `key` `string` The key in the feature state to reset.
- **Description** Removes feature state, setting it back to the default behavior. If no featureId or key is specified, removes all states of that source. If featureId is also specified, removes all keys for that feature's state. If key is also specified, removes that key from that feature's state.
- **See** `.removeFeatureState()` [map method](https://docs.mapbox.com/mapbox-gl-js/api/#map#removefeaturestate)

## Events

All common layer [events](/api/Layers/#events)
