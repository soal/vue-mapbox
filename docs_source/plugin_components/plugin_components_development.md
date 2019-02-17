# Create a plugin component

## Overview

The purpose VueMapbox is to wrap up Mapbox Gl JS library. Any other functions are out of scope. However, there are some plugins for Mapbox Gl JS, that provides additional capabilities, and it where plugin components come into play.

Plugin components are essentially just Vue components that utilize `mapbox` and `map` objects provided by basic `MglMap`.

VueMapbox internally use dependency injection mechanism of Vue ([provide/inject](https://vuejs.org/v2/api/#provide-inject) in Vue docs).
When `MglMap` created, it waits for map loads and initializes then renders it's child components, and provide them `mapbox` (Mapbox GL JS library), `map` (initialized instance of the [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)) and `actions` ([promisified](/api/glmap.md#actions) Mapbox Map methods).
Inject these objects in your component, and you can add to map features you need.

The basic idea is to keep the declarative style of Vue, so it's good to add for example additional controls or layer types to map as a component. It's a right place to wrap Mapbox Gl JS plugins, but it can be used for various purpose.

## Basic example for plugin component

**App template**

```vue
<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle">
    <MyPluginComponent />
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: ACCESS_TOKEN,
      mapStyle: MAP_STYLE
    };
  }
};
</script>
```

**Plugin comonent**

```vue
<template>
  <button @click="fly">Fly!</button>
  <div>Map center is: Lng={{ center.lng }}, Lat={{ center.lat }}</div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  name: "MyPluginComponent"
  inject: ["mapbox", "map", "actions"],

  data() {
    return {
      center: null
    };
  },

  created() {
    this.center = this.map.getCenter();
  },

  methods: {
    async fly() {
      const flyResult = await this.actions.flyTo({ center: [10, 10] });
      this.center = flyResult.center;
    }
  }
};
</script>
```

## VueMapbox helpers <Badge text="experimental" type="warn"/>

::: danger Experimental
Helpers are experimenatal feature and will change in future, but we will try keep backward compatibility for a long time and provide deprecation warnings.
For now they just mixins that used in VueMapbox internal implementation.
:::

Beside providing base objects, VueMapbox give some useful helper mixins, that can be used in plugin components.
You can access to them via `$helpers` named export:

```js
import { $helpers } from "vue-mapbox";

const { withEvents, withSelfEvents, asControl, asLayer } = $helpers;
```

### `withEvents`

[Source](https://github.com/soal/vue-mapbox/blob/master/src/lib/withEvents.js).  
Provides `$_emitEvent` and `$_emitMapEvent` methods to emit events in VueMapbox style.

### `withSelfEvents`

[Source](https://github.com/soal/vue-mapbox/blob/master/src/components/UI/withSelfEvents.js)  
Provides `$_bindSelfEvents`, `$_unbindSelfEvents` and `$_emitSelfEvent`.
They can be used to bind events to Mapbox GL JS objects that emit self events instead of `Map` object like controls, markers and popups.

### `asControl`

[Source](https://github.com/soal/vue-mapbox/blob/master/src/components/UI/controls/controlMixin.js).  
Provides backbone for Map controls (like )

### `asLayer`

[Source](https://github.com/soal/vue-mapbox/blob/master/src/components/layer/layerMixin.js).  
Provides backbone for Map layer.  
See also [layers API doc](/api/layers)

## Creating component for Mapbox GL JS plugin

Example below can give you an idea how to create component for Mapbox GL JS plugin.

**[VueMaboxGeocoder](https://github.com/soal/vue-mapbox-geocoder) — wrapper for [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder)**:

<!-- ## Component API recommendations -->
