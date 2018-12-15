# Layers common

## Props

#### Props for Mapbox GL source

### `sourceId`

- **Type:** `String`
- **Required**
- **Non-Synced**
- **Description:** ID of the source to add. Must not conflict with existing sources.
- **See:** `.addSource()` [Map method](https://www.mapbox.com/mapbox-gl-js/api/#map#addsource)

#### Props for Mapbox GL layer

### `layerId`

- **Type** `String`
- **Description:** ID of the layer to add. Must not conflict with existing layers.
- **Required**
- **Non-Synced**
- **See:** `id` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-id)

### `metadata`

- **Type:** `Object`
- **Non-Synced**
- **Description:** Arbitrary properties useful to track with the layer, but do not influence rendering.
- **See:** `metadata` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-metadata)

### `minZoom`

- **Type:** `Number`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden.
- **See:** `minzoom` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-minzoom)

### `maxZoom`

- **Type:** `Number`
- **Default:** `undeined`
- **Non-Synced**
- **Description:** The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden.
- **See:** `maxzoom` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-maxzoom)

### `paint`

- **Type:** `Object`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** Default paint properties for this layer.
- **See:** `paint` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-paint)

### `layout`

- **Type:** `Object`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** Layout properties for the layer.
- **See:** `layout` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-paint)

### `filter`

- **Type:** `Object`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** A expression specifying conditions on source features. Only features that match the filter are displayed.
- **See:** `before` in `.addLayer()` [Map method](https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer)

### `before`

- **Type:** `String`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** The ID of an existing layer to insert the new layer before.
- **See:** `metadata` in [Mapbox Layer Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-metadata)

#### Props for Vue-Mapbox component

### `clearSource`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If `true`, component will remove layer source from map on component destruction.

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
- **Description** Flag that indicated if layer source already loaded.

### `mapLayer`

- **Type** `Object`
- **Description** Mapbox GL layer object.
- **See** [`.getLayer`](https://www.mapbox.com/mapbox-gl-js/api/#map#getlayer) map method

### `mapSource`

- **Type** `Object`
- **Description** Source for this layer.
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
