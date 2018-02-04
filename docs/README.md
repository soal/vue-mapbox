# Vue-mapbox

> Combine powers of [Vue.js](https://vuejs.org/) and [Mapbox Gl JS](https://mapbox.com/mapbox-gl-js)

## What it is

Vue-mapbox is wrapper around Mapbox GL JS library that provides vueish-way to interact with the map.

## Why
Motivation for creating this library described in depths [here](motivation.md)

#### TL;DR:
 - You can use map elements like layers, markers, popups as Vue components
 - You can control them via synchronized props
 - They respect Vue lifecycle, so you don't need bother to cleanup elements on map
 - You can use them in OOP-style, for example use GeojsonLayer.move() instead of getting layer object from map and use map.move(layer)
 - You can do async map operations and get results in Promise without messing with map events and figuring out what action cause it
 - You can catch map events like Vue events
 - ...and other good stuff that makes work with map _**vuetified**_ 👌

## Dependencies
Vue-mapox works with  
Vue.js 2.5+  
 Mapbox GL JS 0.40+  
 
## Size
 ~ 39 kB minified  
 ~ 7 kB minified and gzipped
 
## Browser compatibility
_Coming soon_
