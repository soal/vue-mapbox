# CanvasLayer

## Props

### `urls`

- **Type:** `Array`
- **Required**
- **Non-Synced**
- **Description:** URLs to video content in order of preferred format.
- **See:** `urls` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-video-urls)

### `coordinates`

- **Type:** `Array`
- **Required**
- **Non-Synced**
- **Description:** Corners of video specified in longitude, latitude pairs.
- **See:** `coordinates` in [Mapbox Source Style Spec](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-video-coordinates)

## Computed getters

### `video`

- **Description** Returns the HTML video element.
- **See** `.getVideo()` [method](https://www.mapbox.com/mapbox-gl-js/api/#videosource#getvideo)
