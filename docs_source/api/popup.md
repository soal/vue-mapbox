# Popup

## Props

### `showed`

- **Type**: `Boolean`
- **non-synced**
- **Description:** If `true`, the popup showes immediately after the component is mounted.

### `closeButton`

- **Type**: `Boolean`
- **Description:** If `true`, a close button will appear in the top right corner of the popup.
- **See:** `closeButton` in [Popup](https://docs.mapbox.com/mapbox-gl-js/api/#popup)

### `closeOnClick`

- **Type**: `Boolean`
- **Description:** If `true`, the popup will closed when the map is clicked.
- **See:** `closeOnClick` in [Popup](https://docs.mapbox.com/mapbox-gl-js/api/#popup)

### `anchor`

- **Type**: `String`
- **Description:** A string indicating the part of the Popup that should be positioned closest to the Popup location. Options are 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' . If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom'.
- **See:** `anchor` in [Popup](https://docs.mapbox.com/mapbox-gl-js/api/#popup)

### `offset`

- **Type**: `Number | Object | Array`
- **Description:** A pixel offset applied to the popup's location.

  - a single number specifying a distance from the popup's location
  - a PointLike specifying a constant offset
  - an object of Points specifing an offset for each anchor position Negative offsets indicate left and up.

- **See:** `offset` in [Popup](https://docs.mapbox.com/mapbox-gl-js/api/#popup)

### `coordinates`

- **Type**: `Array`
- **Description:** Popup coordinates in format `[longitude, latitude]`
- **See:** `setLngLat()` in [Popup](https://docs.mapbox.com/mapbox-gl-js/api/#popup#setlnglat)

### `onlyText`

- **Type**: `Boolean`
- **Description:** If `true` content of the Popup treated as plain text
- **See:** `setText` in [Popup](https://docs.mapbox.com/mapbox-gl-js/api/#popup#settext)

## Slots

### `default`

- **Description:** Slot for Popup content. Can be plain text, HTML or Vue component. If `onlyText` set to `true` content in this slot treated as plaint text.

## Events

### `@added`

- **Description:** Fires when popup added on the map.
- **Payload** `{ popup: Popup }` Object with MapboxGL `Popup` object

### `@removed`

- **Description:** Fires when popup removed the map.
- **Payload** `{ popup: Popup }` Object with MapboxGL `Popup` object

### `@open`

- **Description:** Fires when marker added on the map.
- **Payload** `{ popup: Popup }` Object with MapboxGL `Popup` object

### `@close`

- **Description:** Fires when marker added on the map.
- **Payload** `{ popup: Popup }` Object with MapboxGL `Popup` object
