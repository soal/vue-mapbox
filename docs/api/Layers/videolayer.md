# CanvasLayer

## Props

All common [layers props](/api/Layers/README.md#props)

### `source`

- **Type:** `Object | String`
- **Non-Synced**
- **Description:** A data source containing video.
- **See:** `Video source` in [Mapbox API Docs](https://docs.mapbox.com/mapbox-gl-js/api/#videosource)

::: tip Reactivity
`coordinates` field of the `source` prop is reactive.
If you change it's value, changes automatically applied to the map.
:::

## Computed getters

### `video`

- **Description** Returns the HTML video element.
- **See** `.getVideo()` [method](https://docs.mapbox.com/mapbox-gl-js/api/#videosource#getvideo)
