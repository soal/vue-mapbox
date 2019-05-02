# GlMap

## Props

### `mapboxGl`

- **Type**: `Object`
- **Default:** `null`
- - **Description:** Mapboxgl-js implementation. Useful for lazy-loading. If omitted, VueMapbox imports Mapbox-gl-js dynamically.

### `mapStyle`

- **Type**: `String`, `Object`
- **Required**
- **Synced**
- **Description:** The map's Mapbox style. This must be an a JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON.
- **See:** `options.style` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `container`

- **Type:** `String`, `HTMLElement`
- **Default:** `#map-{random number}`
- **Non-Synced**
- **Description:** The HTML element in which Mapbox GL JS will render the map
- **See:** `options.container` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `accessToken`

- **Type:** `String`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** Token for access Mapbox map
- **See:** [accessToken](https://docs.mapbox.com/mapbox-gl-js/api/#accesstoken)

### `minZoom`

- **Type:** `Number`
- **Default:** `0`
- **Synced**
- **Description:** Minimum zoom level of the map (0-24)
- **See:** `options.minZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `maxZoom`

- **Type:** `Number`
- **Default:** `22`
- **Synced**
- **Description:** Maximum zoom level of the map (0-24)
- **See:** `options.maxZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `hash`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** If true, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL
- **See:** `options.hash` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `interactive`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If false, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction
- **See:** `options.interactive` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `bearingSnap`

- **Type:** `Number`
- **Default:** `7`
- **Non-Synced**
- **Description:** The threshold, measured in degrees, that determines when the map's bearing will snap to north
- **See:** `options.bearingSnap` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `attributionControl`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, an AttributionControl will be added to the map
- **See:** `options.attributionControl` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `logoPosition`

- **Type:** `String`, `top-left`, `top-right`, `bottom-right`, `bottom-left`
- **Default:** `bottom-left`
- **Non-Synced**
- **Description:** A string representing the position of the Mapbox wordmark on the map
- **See:** `options.logoPosition` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `failIfMajorPerformanceCaveat`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If true, map creation will fail if the performance of Mapbox GL JS would be dramatically worse than expected (i.e. a software renderer would be used)
- **See:** `options.failIfMajorPerformanceCaveat` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `crossSourceCollisions`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, symbols from multiple sources can collide with each other during collision detection. If false , collision detection is run separately for the symbols in each source.
- **See:** `options.crossSourceCollisions` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `fadeDuration`

- **Type:** `Number`
- **Default:** `300`
- **Non-Synced**
- **Description:** Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading.
- **See:** `options.fadeDuration` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `preserveDrawingBuffer`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If true, the map's canvas can be exported to a PNG using map.getCanvas().toDataURL()
- **See:** `options.preserveDrawingBuffer` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `refreshExpiredTiles`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the map won't attempt to re-request tiles once they expire per their HTTP cacheControl / expires headers.
- **See:** `options.refreshExpiredTiles` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `maxBounds`

- **Type:** `Array`, `LngLatBoundsLike object`
- **Default:** `undefined`
- **Synced**
- **Description:** If set, the map will be constrained to the given bounds
- **See:** `options.maxBounds` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `scrollZoom`

- **Type:** `Boolean`, `Object`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "scroll to zoom" interaction is enabled. An Object value is passed as options to ScrollZoomHandler#enable
- **See:** `options.scrollZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `boxZoom`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "box zoom" interaction is enabled
- **See:** `options.boxZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `dragRotate`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "drag to rotate" interaction is enabled
- **See:** `options.dragRotate` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `keyboard`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, keyboard shortcuts are enabled
- **See:** `options.keyboard` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `doubleClickZoom`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "double click to zoom" interaction is enabled
- **See:** `options.doubleClickZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `touchZoomRotate`

- **Type:** `Boolean`, `Object`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "pinch to rotate and zoom" interaction is enabled. An Object value is passed as options to TouchZoomRotateHandler#enable
- **See:** `options.touchZoomRotate` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `trackResize`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the map will automatically resize when the browser window resizes.
- **See:** `options.trackResize` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `center`

- **Type:** `Array, LngLatLike Object`
- **Default:** `undefined`
- **Synced**
- **Description:** Geographical centerpoint of the map. If center is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object.If it is not specified in the style, either, it will default to `[0, 0]`
- **See:** `options.center` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `zoom`

- **Type:** `Number`
- **Default:** `undefined`
- **Synced**
- **Description:** Zoom level of the map. If zoom is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`
- **See:** `options.zoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `bearing`

- **Type:** `Number`
- **Default:** `undefined`
- **Synced**
- **Description:** Bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`
- **See:** `options.bearing` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `pitch`

- **Type:** `Number`
- **Default:** `undefined`
- **Synced**
- **Description:** Pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`
- **See:** `options.pitch` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `renderWorldCopies`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true , multiple copies of the world will be rendered, when zoomed out
- **See:** `options.renderWorldCopies` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `light`

- **Type:** `Object`
- **Default:** `undefined`
- **Synced**
- **Description:** Light properties. Must conform to the Mapbox Style Specification
- **See:** See [setLight](https://docs.mapbox.com/mapbox-gl-js/api/#map#setlight) Map method

### `tileBoundaries`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** A Boolean indicating whether the map will render an outline around each tile. These tile boundaries are useful for debugging
- **See:** See [showTileBoundaries](https://docs.mapbox.com/mapbox-gl-js/api/#map#showtileboundaries) Map property

### `collisionBoxes`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** A Boolean indicating whether the map will render boxes around all symbols in the data source, revealing which symbols were rendered or which were hidden due to collisions. This information is useful for debugging
- **See:** See [showCollisionBoxes](https://docs.mapbox.com/mapbox-gl-js/api/#map#showcollisionboxes) Map property

### `repaint`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** A Boolean indicating whether the map will continuously repaint. This information is useful for analyzing performance.
- **See:** See [repaint](https://docs.mapbox.com/mapbox-gl-js/api/#map#repaint) Map property

### `transformRequest`

- **Type:** `Function`
- **Default:** `null`
- **Non-Synced**
- **Description:** A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a `url` property and optionally `headers` and `credentials` properties.
- **See:** `options.transformRequest` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### `localIdeographFontFamily`

- **Type:** `String`
- **Default:** `null`
- **Non-Synced**
- **Description:** If specified, defines a CSS font-family for locally overriding generation of glyphs in the 'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold). The purpose of this option is to avoid bandwidth-intensive glyph server requests.
- **See:** `options.localIdeographFontFamily` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

## Actions

Asynchronous actions exposed via `GlMap.actions`

::: tip
[Map-promisified](https://github.com/soal/map-promisified) is used as wrapper around Mapbox GL JS methods. That library can be used independently from VueMapbox.
:::

### `.stop(eventData?)`

- **Arguments:**
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Stops all animations on the map
- **Returns:** `{Promise<{ pitch, zoom, bearing, center }>}`
  Promise that resolves object with map parameters on the moment of call `stop()`

### `.panBy(offset, options?, eventData?)`

- **Arguments:**
  - `offset` `{Point | number[]}` x and y coordinates by which to pan the map
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Pans the map by the specified offest
- **Returns:** `{Promise<{ eventData, center }>}`
  Promise that resolves object with event data and new center of the map when animation ends
- **See:** [panBy](https://docs.mapbox.com/mapbox-gl-js/api/#map#panby) Map method

### `.panTo(coordinates, options?, eventData?)`

- **Arguments:**
  - `coordinates` `{LngLat | number[][]}` The location to pan the map to. See also: [LngLat](https://docs.mapbox.com/mapbox-gl-js/api/#lnglat)
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Pans the map to the specified location, with an animated transition
- **Returns:** `{Promise<{ eventData, center }>}`
  Promise that resolves object with event data and new center of the map when animation ends
- **See:** [panTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#panto) Map method

### `.zoomTo(zoom, options?, eventData?)`

- **Arguments:**
  - `zoom` `{number}` The zoom level to transition to
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Zooms the map to the specified zoom level, with an animated transition
- **Returns:** `{Promise<{ eventData, zoom }>}`
  Promise that resolves object with event data and new zoom level of the map when animation ends
- **See:** [zoomTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#zoomto) Map method

### `.zoomIn(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Increases the map's zoom level by 1
- **Returns:** `{Promise<{ eventData, zoom }>}`
  Promise that resolves object with event data and new zoom level of the map when animation ends
- **See:** [zoomIn](https://docs.mapbox.com/mapbox-gl-js/api/#map#zoomin) Map method

### `.zoomOut(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Decreases the map's zoom level by 1
- **Returns:** `{Promise<{ eventData, zoom }>}`
  Promise that resolves object with event data and new zoom level of the map when animation ends
- **See:** [zoomOut](https://docs.mapbox.com/mapbox-gl-js/api/#map#zoomOut) Map method

### `.rotateTo(bearing, options?, eventData?)`

- **Arguments:**
  - `bearing` `{number}` The desired bearing
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Rotates the map to the specified bearing, with an animated transition. The bearing is the compass direction that is \"up\"; for example, a bearing of 90° orients the map so that east is up.
- **Returns:** `{Promise<{ eventData, bearing }>}`
  Promise that resolves object with event data and new bearing of the map when animation ends
- **See:** [rotateTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#rotateto) Map method

### `.resetNorth(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
- **Description:** Rotates the map so that north is up (0° bearing), with an animated transition
- **Returns:** `{Promise<{ eventData, bearing }>}`
  Promise that resolves object with event data and new bearing of the map when animation ends
- **See:** [resetNorth](https://docs.mapbox.com/mapbox-gl-js/api/#map#resetnorth) Map method

### `.snapToNorth(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it (i.e. within the `bearingSnap` prop threshold).
- **Returns:** `{Promise<{ eventData, bearing }>}`
  Promise that resolves object with event data and new bearing of the map when animation ends
- **See:** [snapToNorth](https://docs.mapbox.com/mapbox-gl-js/api/#map#snaptonorth) Map method

### `.fitBounds(bounds, options?, eventData?)`

- **Arguments:**
  - `bounds` `{ number[][] | LngLatBounds }` Center these bounds in the viewport and use the highest zoom level up to and including `maxZoom` that fits them in the viewport
  - `options` `{Object}`
    - `options.padding?` `{number}` The amount of padding in pixels to add to the given bounds
    - `options.linear` `{boolean}` _default_: `false` If true , the map transitions using `Map#easeTo`. If false , the map transitions using `Map#flyTo`. See those functions and AnimationOptions for information about options available.
    - `options.easing?` An easing function for the animated transition. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
    - `options.offset` `{ number[] | Point }` _default:_ `[0, 0]` The center of the given bounds relative to the map's center, measured in pixels
    - `options.maxZoom?` `{number}` The maximum zoom level to allow when the map view transitions to the specified bounds
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Pans and zooms the map to contain its visible area within the specified geographical bounds. This function will also reset the map's bearing to 0 if bearing is nonzero
- **Returns:** `{Promise<{ eventData, bounds }>}`
  Promise that resolves object with event data and new bounds of the map when animation ends
- **See:** [fitBounds](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds) Map method

### `.jumpTo(options, eventData?)`

- **Arguments:**
  - `options` `{Object}` See [CameraOptions](https://docs.mapbox.com/mapbox-gl-js/api/#cameraoptions)
    - `options.pitch?` `{number}` The desired pitch, in degrees
    - `options.zoom?` `{number}` The desired zoom level
    - `options.center?` `{number[] | LngLat}` The desired center
    - `options.bearing?` `{number}` The desired bearing, in degrees
    - `options.around?` `{number[] | LngLat}` If `zoom` is specified, `around` determines the point around which the zoom is centered.
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Changes any combination of center, zoom, bearing, and pitch, without an animated transition. The map will retain its current values for any details not specified in options
- **Returns:** `{Promise<{ eventData, pitch, zoom, center, bearing }>}`
  Promise that resolves object with event data and new pitch, zoom, center and bearing of the map
- **See:** [jumpTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#jumpto) Map method

### `.easeTo(options, eventData?)`

- **Arguments:**

  - `options` `{Object}` Combination of [CameraOptions](https://docs.mapbox.com/mapbox-gl-js/api/#cameraoptions) and [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)

    - `options.pitch?` `{number}` The desired pitch, in degrees
    - `options.zoom?` `{number}` The desired zoom level
    - `options.center?` `{number[] | LngLat}` The desired center
    - `options.bearing?` `{number}` The desired bearing, in degrees
    - `options.around?` `{number[] | LngLat}` If `zoom` is specified, `around` determines the point around which the zoom is centered.
    - `options.duration?` `{number}` The animation's duration, measured in milliseconds.
    - `options.easing?` `{Function}` A function taking a time in the range 0..1 and returning a number where 0 is the initial state and 1 is the final state.
    - `options.offset?` `{number[] | Point}` of the target center relative to real map container center at the end of animation.
    - `options.animate?` `{boolean}`: If `false`, no animation will occur

  - `eventData` `{Object}` Custom data passed to corresponfing event.

- **Description:** Changes any combination of center, zoom, bearing, and pitch, with an animated transition between old and new values. The map will retain its current values for any details not specified in `options`
- **Returns:** `{Promise<{ eventData, pitch, zoom, center, bearing }>}`
  Promise that resolves object with event data and new pitch, zoom, center and bearing of the map when animations ends
- **See:** [easeTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#easeto) Map method

### `.flyTo(options, eventData?)`

- **Arguments:**
  - `options` `{Object}`
    - `options.curve?` `{number}` _default_ `1.42` The zooming "curve" that will occur along the flight path. A high value maximizes zooming for an exaggerated animation, while a low value minimizes zooming for an effect closer to Map#easeTo. 1.42 is the average value selected by participants in the user study discussed in van Wijk (2003). A value of Math.pow(6, 0.25) would be equivalent to the root mean squared average velocity. A value of 1 would produce a circular motion
    - `options.minZoom?` `{number}` The zero-based zoom level at the peak of the flight path. If `options.curve` is specified, this option is ignored
    - `options.speed?` `{number}` _default_ `1.2` The average speed of the animation defined in relation to `options.curve`. A speed of 1.2 means that the map appears to move along the flight path by 1.2 times `options.curve` screenfuls every second. A screenful is the map's visible span. It does not correspond to a fixed physical distance, but varies by zoom level
    - `options.screenSpeed?` `{number}` The average speed of the animation measured in screenfuls per second, assuming a linear timing curve. If `options.speed` is specified, this option is ignored
    - `options.maxDuration?` `{number}` The animation's maximum duration, measured in milliseconds. If duration exceeds maximum duration, it resets to 0
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Changes any combination of center, zoom, bearing, and pitch, animating the transition along a curve that evokes flight. The animation seamlessly incorporates zooming and panning to help the user maintain her bearings even after traversing a great distance
- **Returns:** `{Promise<{ eventData, pitch, zoom, center, bearing }>}`
  Promise that resolves object with event data and new pitch, zoom, center and bearing of the map when animations ends
- **See:** [flyTo](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto) Map method

## Events

Payload of events contains object with properties:

- `mapboxEvent` Original Mapbox GL JS event
- `map` Current map object
- `component` Component that emits event

### `@load`

- **Description:** Fires after map fully loaded
- **Payload** `{ map, component }` `map` is Mapbox Gl JS Map object, `component` is instance of GlMap component

GlMap passes all Mapbox GL JS Map events. Full list of map events see [here](https://docs.mapbox.com/mapbox-gl-js/api/#map.event:resize)
