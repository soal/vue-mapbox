# Base map

## Adding map component

For using maps with Mapbox GL JS you need a [map style](https://mapbox.com/mapbox-gl-js/style-spec).  
If you using Mapbox-hosted maps, you need to set `access_token`. Look for details in Mapbox [documentation](https://mapbox.com/help/define-access-token/).  
If you using self-hosting maps on your own server you can omit this parameter.

```vue
<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
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
      accessToken: ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: MAP_STYLE // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>
```

::: tip
If you need, you can pass Mapbox-gl-js implementation as `mapboxGl` prop. May be useful for lazy-loading.
Example:

```vue
<template>
  <MglMap
    :mapboxGl="mapbox-gl"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    @load="onMapLoaded"
  />
</template>
```

If none is passed, VueMapbox imports Mapbox-gl internally.
:::

### Interact with map properties as GlMap props

You can control map parameters like zoom, bearing, pitch etc. by changing props.
If you set `.sync` modifier ([Vue docs](https://vuejs.org/v2/guide/components.html#sync-Modifier)) to prop, it will updates when you use operations that takes time to proceed. For example, if you use `flyTo` method, props `zoom`, `center`, `bearing`, `pitch` will be updated when animation ends.

Full list of props see in [API docs](/api/#props), note field 'Synced' in description

## Map loading

When map loads, `MglMap` component emits `load` event. Payload of the event contains Mapbox GL JS `Map` object.
All components placed under `MglMap` will be rendered only after map fully loaded.

::: warning Storing Map object
Take note that it's generally bad idea to add to Vuex or component's `data` anything but primitive types and plain objects. Vue adds getters and setters to every property, so if you add `Map` object to Vuex store or component `data`, it may lead to weird bugs.
If you want to store map object, store it as non-reactive property like in example below.
:::

```vue
<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    @load="onMapLoaded"
  />
</template>

<script>
export default {
  // …component code…
  created() {
    this.map = null;
  },
  methods: {
    onMapLoaded(event) {
      // in component
      this.map = event.map;
      // or just to store if you want have access from other components
      this.$store.map = event.map;
    }
  }
};
</script>
```

## Map actions

Asynchronous map methods exposed at MglMap component in `actions` property. They returns `Promise`, that resolves when action completed.
Promise resolves with map properties that has been changed by used action.  
For example:

```vue
<script>
export deafult {
  name: 'App',

  methods: {
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions

      const newParams = await asyncActions.flyTo({
        center: [30, 30],
        zoom: 9,
        speed: 1
      })
      console.log(newParams)
      /* => {
              center: [30, 30],
              zoom: 9,
              bearing: 9,
              pitch: 7
            }
      */
    }
  }
}
</script>
```

See full list of actions on [API](/api/#actions) page.

### Method `actions.stop()`

Method `.stop()` just stops all animations on map, updates props with new positions and return Promise with map parameters at the moment when `.stop()` called.

### Events

See list of events on [API](/api/#events) page.
