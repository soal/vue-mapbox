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

### `color`
- **Type**: `string`
- **Description:**  The color to use for the default marker if custom marker is not provided. The default is light blue.

## Slots

### `marker`
- **Description:** Slot for custom marker. Can be HTML element or Vue component.

### `default`
- **Description:** Slot for popup component. When popup put inside marker, popup automaticaly mounted to marker, similiar as [setPopup](https://www.mapbox.com/mapbox-gl-js/api/#marker#setpopup)


## Methods

### `.remove()`
- **Description:** Removes marker from the map.
- **Returns** `Marker` MapboxGL marker.
- **See** [Marker.remove](https://www.mapbox.com/mapbox-gl-js/api/#marker#remove)

### `.togglePopup()`
- **Description:** Opens or closes the bound popup, depending on the current state.
- **Returns** `Marker` MapboxGL marker.
- **See** [Marker.togglePopup](https://www.mapbox.com/mapbox-gl-js/api/#marker#togglepopup)

## Events

### `@added`
- **Description:** Fires when marker added on the map.
- **Payload** `{ marker: Marker }` Object with MapboxGL `Marker` object

### `@removed`
- **Description:** Fires when marker removed the map.
- **Payload** `{ marker: Marker }` Object with MapboxGL `Marker` object
