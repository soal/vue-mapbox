# GlMap 
### Props
 
#### `mapStyle`
 
 - **Type**: `String`, `Object`
 - **Required**
 - **Non-Synced**
 - **Description:**  The map's Mapbox style. This must be an a JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON.
 - **Mapbox GL Docs:** `options.style` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `container`
 - **Type:** `String`, `HTMLElement`
 - **Default:** `#map-{random number}` 
 - **Non-Synced**
 - **Description:** The HTML element in which Mapbox GL JS will render the map
 - **Mapbox GL Docs:** `options.container` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `accessToken`
 - **Type:** `String`
 - **Default:** `undefined` 
 - **Non-Synced**
 - **Description:** Token for access Mapbox map
 - **Mapbox GL Docs:** [accessToken](https://www.mapbox.com/mapbox-gl-js/api/#accesstoken)
 
#### `minZoom`
 - **Type:** `Number`
 - **Default:** `0` 
 - **Synced**
 - **Description:** Minimum zoom level of the map (0-24)
 - **Mapbox GL Docs:** `options.minZoom` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `maxZoom`
 - **Type:** `Number`
 - **Default:** `22` 
 - **Synced**
 - **Description:** Maximum zoom level of the map (0-24)
 - **Mapbox GL Docs:** `options.maxZoom` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `hash`
 - **Type:** `Boolean`
 - **Default:** `false` 
 - **Synced**
 - **Description:** If true, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL
 - **Mapbox GL Docs:** `options.hash` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `interactive`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If false, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction 
 - **Mapbox GL Docs:** `options.interactive` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `bearingSnap`
 - **Type:** `Number`
 - **Default:** `7` 
 - **Non-Synced**
 - **Description:** The threshold, measured in degrees, that determines when the map's bearing will snap to north 
 - **Mapbox GL Docs:** `options.bearingSnap` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `attributionControl`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, an AttributionControl will be added to the map 
 - **Mapbox GL Docs:** `options.attributionControl` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `logoPosition`
 - **Type:** `String`, `top-left`, `top-right`, `bottom-right`, `bottom-left`
 - **Default:** `bottom-left` 
 - **Non-Synced**
 - **Description:** A string representing the position of the Mapbox wordmark on the map 
 - **Mapbox GL Docs:** `options.logoPosition` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `failIfMajorPerformanceCaveat`
 - **Type:** `Boolean`
 - **Default:** `false` 
 - **Non-Synced**
 - **Description:** If true, map creation will fail if the performance of Mapbox GL JS would be dramatically worse than expected (i.e. a software renderer would be used) 
 - **Mapbox GL Docs:** `options.failIfMajorPerformanceCaveat` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `preserveDrawingBuffer`
 - **Type:** `Boolean`
 - **Default:** `false` 
 - **Non-Synced**
 - **Description:** If true, the map's canvas can be exported to a PNG using map.getCanvas().toDataURL() 
 - **Mapbox GL Docs:** `options.preserveDrawingBuffer` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `refreshExpiredTiles`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the map won't attempt to re-request tiles once they expire per their HTTP cacheControl / expires headers.  
 - **Mapbox GL Docs:** `options.refreshExpiredTiles` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `maxBounds`
 - **Type:** `Array`, `LngLatBoundsLike object`
 - **Default:** `undefined` 
 - **Synced**
 - **Description:** If set, the map will be constrained to the given bounds  
 - **Mapbox GL Docs:** `options.maxBounds` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `scrollZoom`
 - **Type:** `Boolean`, `Object`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the "scroll to zoom" interaction is enabled. An Object value is passed as options to ScrollZoomHandler#enable  
 - **Mapbox GL Docs:** `options.scrollZoom` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `boxZoom`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the "box zoom" interaction is enabled  
 - **Mapbox GL Docs:** `options.boxZoom` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `dragRotate`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the "drag to rotate" interaction is enabled  
 - **Mapbox GL Docs:** `options.dragRotate` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `keyboard`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, keyboard shortcuts are enabled  
 - **Mapbox GL Docs:** `options.keyboard` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `doubleClickZoom`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the "double click to zoom" interaction is enabled  
 - **Mapbox GL Docs:** `options.doubleClickZoom` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

