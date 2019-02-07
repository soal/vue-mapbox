# Quickstart

## Using as ES module

### Installation

You can install vue-mapbox via npm. Take note that you need to install mapbox-gl as peer dependency:

```bash
npm install --save vue-mapbox mapbox-gl
```

Add mapbox CSS file to `<head></head>` block of your HTML file (e.g. `index.html`)

```html
<link
  href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
  rel="stylesheet"
/>
```

### Register a plugin

You need to set up vue-mapbox as a plugin for Vue and pass mapbox-gl as argument:

```javascript
import Vue from "vue";
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";

Vue.use(VueMapbox, { mapboxgl: Mapbox });

new Vue({
  el: "#app",
  render: h => h(require("./App"))
});
```

## Using in browser

### Installation

Add Vue, MapboxGL and Vue-mapbox scripts on your page:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ... -->
    <!-- Mapbox GL CSS -->
    <link
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <!-- Vue-mapbox CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/vue-mapbox@latest/dist/vue-mapbox.css"
      rel="stylesheet"
    />
    <!-- Mapbox GL JS -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js"></script>
    <!-- VueJS -->
    <script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
    <!-- Vue-mapbox -->
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/vue-mapbox@latest/dist/vue-mapbox.min.js"
    ></script>
    <!-- ... -->
  </head>
</html>
```

Register plugin and add base map component to your application:

```javascript
Vue.use(VueMapbox.plugin, { mapboxgl: window.mapboxgl });
```

All components will be placed in global VueMapbox object (`VueMapbox.MglMap` etc.)

Now you're ready for mapping. See how to [create a map](/guide/basemap.md).
