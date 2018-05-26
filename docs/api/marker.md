# Marker

## Props

### `offset`
- **Type**: `Point | number[]`
- **Description:**  The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up.
- **See:** `offset` in [Marker](https://www.mapbox.com/mapbox-gl-js/api/#marker)

### `coordinates`
- **Type**: `number[]`
- **Required**
- **Synced**
- **Description:**  Marker coordinates in format `[longitude, latitude]`

## Slots

### `default`
- **Description:** Slot for popup. When popup put inside marker, popup automaticaly mounted to marker, similiat as [setPopup](https://www.mapbox.com/mapbox-gl-js/api/#marker#setpopup)

### `marker`
- **Description:** 

## Methods

### `.remove()`

### `.togglePopup()`

## Events

### `@added`

### `@removed`
