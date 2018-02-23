# GlMap 
### Props
 
#### `mapStyle`
 
 - **Type**: `String`, `Object`
 - **Required**
 - **Synced**
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
 
#### `touchZoomRotate`
 - **Type:** `Boolean`, `Object`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the "pinch to rotate and zoom" interaction is enabled. An Object value is passed as options to TouchZoomRotateHandler#enable   
 - **Mapbox GL Docs:** `options.touchZoomRotate` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `trackResize`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true, the map will automatically resize when the browser window resizes.    
 - **Mapbox GL Docs:** `options.trackResize` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `center`
 - **Type:** `Array, LngLatLike Object`
 - **Default:** `undefined` 
 - **Synced**
 - **Description:** Geographical centerpoint of the map. If center is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object.If it is not specified in the style, either, it will default to `[0, 0]`    
 - **Mapbox GL Docs:** `options.center` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `zoom`
 - **Type:** `Number`
 - **Default:** `undefined` 
 - **Synced**
 - **Description:** Zoom level of the map. If zoom is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`    
 - **Mapbox GL Docs:** `options.zoom` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `bearing`
 - **Type:** `Number`
 - **Default:** `undefined` 
 - **Synced**
 - **Description:** Bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`     
 - **Mapbox GL Docs:** `options.bearing` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `pitch`
 - **Type:** `Number`
 - **Default:** `undefined` 
 - **Synced**
 - **Description:** Pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`     
 - **Mapbox GL Docs:** `options.pitch` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)

#### `renderWorldCopies`
 - **Type:** `Boolean`
 - **Default:** `true` 
 - **Non-Synced**
 - **Description:** If true , multiple copies of the world will be rendered, when zoomed out     
 - **Mapbox GL Docs:** `options.renderWorldCopies` in [Map](https://www.mapbox.com/mapbox-gl-js/api/#map)
 
#### `light`
 - **Type:** `Object`
 - **Default:** `undefined` 
 - **Synced**
 - **Description:** Light properties. Must conform to the Mapbox Style Specification
 - **Mapbox GL Docs:** See [setLight](https://www.mapbox.com/mapbox-gl-js/api/#map#setlight) Map method
 
#### `tileBoundaries`
 - **Type:** `Boolean`
 - **Default:** `false` 
 - **Synced**
 - **Description:** A Boolean indicating whether the map will render an outline around each tile. These tile boundaries are useful for debugging
 - **Mapbox GL Docs:** See [showTileBoundaries](https://www.mapbox.com/mapbox-gl-js/api/#map#showtileboundaries) Map property
 
#### `collisionBoxes`
 - **Type:** `Boolean`
 - **Default:** `false` 
 - **Synced**
 - **Description:** A Boolean indicating whether the map will render boxes around all symbols in the data source, revealing which symbols were rendered or which were hidden due to collisions. This information is useful for debugging
 - **Mapbox GL Docs:** See [showCollisionBoxes](https://www.mapbox.com/mapbox-gl-js/api/#map#showcollisionboxes) Map property
 
#### `repaint`
 - **Type:** `Boolean`
 - **Default:** `false` 
 - **Synced**
 - **Description:** A Boolean indicating whether the map will continuously repaint. This information is useful for analyzing performance.
 - **Mapbox GL Docs:** See [repaint](https://www.mapbox.com/mapbox-gl-js/api/#map#repaint) Map property
