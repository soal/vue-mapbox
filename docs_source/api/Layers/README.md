# Layers common

## Props

#### Props for Mapbox GL source

### `sourceId`

- **Type:** `String`
- **Required**
- **Non-Synced**
- **Description:** ID of the source to add. Must not conflict with existing sources.
- **See:** `.addSource()` [Map method](https://docs.mapbox.com/mapbox-gl-js/api/#map#addsource)

### `source`

- **Type:** `Object | String`
- **Non-Synced** A source for layer or URL to it.
- **Description:**
- **See:** `sources` in [Mapbox Style Spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources)

#### Props for Mapbox GL layer

### `layerId`

- **Type** `String`
- **Description:** ID of the layer to add. Must not conflict with existing layers.
- **Required**
- **Non-Synced**
- **See:** `id` in [Mapbox Layer Style Spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layer-id)

### `layer`

- **Type** `String`
- **Description:** Layer configuration object.
- **Required**
- **Non-Synced**
- **See:** `layers` in [Mapbox Layer Style Spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers)

::: tip Reactivity
`minzoom`, `maxzoom`, `paint`, `layout` and `filter` fields of `layer` prop are reactive. If you change their value, changes automatically applied to the map.
:::

### `before`

- **Type:** `String`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** The ID of an existing layer to insert the new layer before.
- **See:** `metadata` in [Mapbox Layer Style Spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layer-metadata)

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
- **Description:** If source passed to `source` prop of layer component already added ot the map, it will be ignored and existed `source` will be used. If `replaceSource` is `true` source will be replaced with new instead.

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
- **See** [`.getLayer()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#getlayer) map method

### `mapSource`

- **Type** `Object`
- **Description** Source for this layer.
- **See** [`Mapbox GL source`](https://docs.mapbox.com/mapbox-gl-js/api/#sources)

## Methods

### `.move(beforeId?)`

- **Arguments:**
- `beforeId` `String` The ID of an existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
- **Description** Moves a layer to a different z-position.
- **See** [`.moveLayer()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#movelayer) map method

### `.remove()`

- **Description** Removes the layer with and source assosiated with it.
- **See** [`.removeLayer()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#removelayer) map method

## Events

Payload of events contains object with properties:

- `mapboxEvent` Original Mapbox GL JS event
- `layerId` ID of current layer
- `map` Current map object
- `component` Component that emits event

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
