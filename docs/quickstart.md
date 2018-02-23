# Quickstart

## Installation
You can install vue-mapbox via npm. Take note that you need to install mapbox-gl as peer dependency:
```bash
npm install --save vue-mapbox mapbox-gl
```

## Register a plugin
You need to set up vue-mapbox as a plugin for Vue and pass mapbox-gl as argument:
  
```javascript
import Vue from 'vue'
import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.use(VueMapbox, { mapboxgl: Mapbox })

new Vue({
  el: '#app',
  render: h => h(require('./App'))
})
```

Now you're ready for mapping. See how to [create a map](basemap.md).
