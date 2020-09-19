# Create a plugin component

## Overview

The purpose VueMapbox is to wrap up Mapbox Gl JS library. Any other functions are out of scope. However, there are some plugins for Mapbox Gl JS, that provides additional capabilities, and it where plugin components come into play.

Plugin components are essentially just Vue components that utilize `mapbox` and `map` objects provided by basic `MglMap`.

VueMapbox internally use dependency injection mechanism of Vue ([provide/inject](https://vuejs.org/v2/api/#provide-inject) in Vue docs).
When `MglMap` created, it waits for map loads and initializes then renders it's child components, and provide them `mapbox` (Mapbox GL JS library), `map` (initialized instance of the [Map](https://docs.mapbox.com/mapbox-gl-js/api/#map)) and `actions` ([promisified](/api/#actions) Mapbox Map methods).
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

```js
// First, there is no separate HTML to render, so we don't need template and SFC, so it's just JS file

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { $helpers } from "vue-mapbox"; // Get $helpers from VueMapbox

// Define list of mapbox-gl-geocoder events
const geocoderEvents = {
  clear: "clear",
  loading: "loading",
  results: "results",
  result: "result",
  error: "error"
};

export default {
  name: "GeocoderControl",
  mixins: [$helpers.asControl], // MapboxGeocoder is a control, so we use mixin

  inject: ["mapbox", "map"], // Here we inject objects provided by MglMap

  props: {
    // MapboxGeocoder requires access token
    accessToken: {
      type: String,
      required: true
    },
    input: {
      type: String,
      default: null
    },
    proximity: {
      type: Object,
      default: null
    }
    // ...here goes other props...
  },

  data() {
    return {
      initial: true
    };
  },

  // Here we watch for props and and apply changes to MapboxGeocoder if needed
  watch: {
    input: {
      handler(next, prev) {
        if (this.control && next !== prev) {
          this.control.setInput(next);
        }
      },
      immediate: true
    },
    proximity(next, prev) {
      if (this.control && next !== prev) {
        this.control.setProximity(next);
      }
    }
  },

  created() {
    this.control = null; // Here we will store MapboxGeocoder instance. We don't want Vue reactivity system mess with it, so we store it non-reactive
    if (this.accessToken && !this.mapbox.accessToken) {
      this.mapbox.accessToken = this.accessToken;
    }
    this.control = new MapboxGeocoder(this.$props); // Creating MapboxGeocoder instance and pass props as options to it
    this.control.on("results", this.$_updateInput); // We need to update synchronized prop "input" when user enters some query to search field

    // Now we can add control to the map
    this.$_deferredMount();
  },

  beforeDestroy() {
    this.control.off("results", this.$_updateInput);
    // Also, control will be removed from map in beforeDestroy() lifecycle hook in `asControl` mixin
  },

  methods: {
    $_deferredMount() {
      // Because this component placed in MglMap sub-tree, map already initialized and injected above
      this.map.addControl(this.control);
      if (this.input) {
        // Set input in MapboxGeocoder if there is default data
        this.control.setInput(this.input);
      }
      // Emit added event. `$_emitEvent` method is came from `asControl` mixin
      this.$_emitEvent("added", { geocoder: this.control });
      this.$_bindSelfEvents(Object.keys(geocoderEvents)); // Bin events to emit them as Vue events
      this.initial = false; // Initialization done
    },

    $_bindSelfEvents(events) {
      // $_bindSelfEvents is provided by `asControl` mixin. but we need to replace it because MapboxGeocoder do not follow Mapbox Gl JS events schema and we need custom processing for them
      const vm = this;
      // Here we use this.$listeners to subscribe only on events that user listens on component
      Object.keys(this.$listeners).forEach(eventName => {
        if (events.includes(eventName)) {
          this.control.on(eventName, vm.$_emitControlEvent.bind(vm, eventName));
        }
      });
    },

    // Process event to line up with VueMapbox events format
    $_emitControlEvent(eventName, eventData) {
      return this.$_emitSelfEvent({ type: eventName }, eventData);
    },

    $_updateInput(results) {
      if (!this.initial) {
        const input = results.query ? results.query.join("") : "";
        this.$emit("update:input", input); // update synchormized prop "input"
      }
    }

    //...here goes other public methods
  }
};
```

<!-- ## Component API recommendations -->
