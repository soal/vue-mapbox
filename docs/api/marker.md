# Marker

## Props

### `offset`

- **Type**: `Array<number>`
- **Description:** The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up.
- **See:** `offset` in [Marker](https://docs.mapbox.com/mapbox-gl-js/api/#marker)

### `coordinates`

- **Type**: `Array<number>`
- **Required**
- **Synced**
- **Description:** Marker coordinates in format `[longitude, latitude]`

### `color`

- **Type**: `string`
- **Description:** The color to use for the default marker if custom marker is not provided. The default is light blue.

### `anchor`

- **Type**: `string`
- **Non-Synced**
- **Default** `center`
- **Description:** A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker#setLngLat . Options are 'center' , 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' . The default is 'center'.
- **See** `options.anchor` in [Marker](https://docs.mapbox.com/mapbox-gl-js/api/#marker)

### `draggable`

- **Type**: `boolean`
- **Non-Synced**
- **Default** `false`
- **Description:** A boolean indicating whether or not a marker is able to be dragged to a new position on the map.
- **See** `options.draggable` in [Marker](https://docs.mapbox.com/mapbox-gl-js/api/#marker)

## Slots

### `marker`

- **Description:** Slot for custom marker. Can be HTML element or Vue component.

### `default`

- **Description:** Slot for popup component. When popup put inside marker, popup automaticaly mounted to marker, similiar as [setPopup](https://docs.mapbox.com/mapbox-gl-js/api/#marker#setpopup)

## Methods

### `.remove()`

- **Description:** Removes marker from the map.
- **Returns** `Marker` MapboxGL marker.
- **See** [Marker.remove](https://docs.mapbox.com/mapbox-gl-js/api/#marker#remove)

### `.togglePopup()`

- **Description:** Opens or closes the bound popup, depending on the current state.
- **Returns** `Marker` MapboxGL marker.
- **See** [Marker.togglePopup](https://docs.mapbox.com/mapbox-gl-js/api/#marker#togglepopup)

## Events

### `@added`

- **Description:** Fires when marker added on the map.
- **Payload** `{ component: MarkerComponent, map: Map, marker: Marker }` Object with `Marker` component, parent map and MapboxGl `Marker` object

### `@removed`

- **Description:** Fires when marker removed the map.
- **Payload** `{ component: MarkerComponent, map: Map, marker: Marker }` Object with `Marker` component, parent map and MapboxGl `Marker` object

### `@drag`

- **Description:** Fires when marker dragged if marker `draggable` prop is `true`
- **Payload** `{ component: MarkerComponent, map: Map, mapboxEvent: Event }` Object with `Marker` component, parent map and original MapboxGl event

### `@dragstart`

- **Description:** Fires when marker dragging starts if marker `draggable` prop is `true`
- **Payload** `{ component: MarkerComponent, map: Map, mapboxEvent: Event }` Object with `Marker` component, parent map and original MapboxGl event

### `@dragend`

- **Description:** Fires when marker dragging ends if marker `draggable` prop is `true`
- **Payload** `{ component: MarkerComponent, map: Map, mapboxEvent: Event }` Object with `Marker` component, parent map and original MapboxGl event

### `@click` <Badge text="experimental" type="warn"/>

- **Description:** Fires marker is clicked.
- **Payload**

```
    {
        component: MarkerComponent,
        map: Map,
        mapboxEvent: DOMEvent,
        marker: Marker
    }
```

Object with `Marker` component, parent map and original MapboxGl event

### `@mouseenter` <Badge text="experimental" type="warn"/>

- **Description:** Fires when mouse cursor enters marker area.
- **Payload**

```
    {
        component: MarkerComponent,
        map: Map,
        mapboxEvent: DOMEvent,
        marker: Marker
    }
```

Object with `Marker` component, parent map and original MapboxGl event

### `@mouseleave` <Badge text="experimental" type="warn"/>

- **Description:** Fires when mouse cursor leaves marker area.
- **Payload**

```
    {
        component: MarkerComponent,
        map: Map,
        mapboxEvent: DOMEvent,
        marker: Marker
    }
```

Object with `Marker` component, parent map and original MapboxGl event
