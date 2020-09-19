# Plugin components

VueMapbox implements wrapper for core Mapbox Gl JS library API.  
Any other functions, like [Mapbox Gl JS plugins](https://docs.mapbox.com/mapbox-gl-js/plugins/) is out of scope.
However, they can be implemented as plugin components.

## Using plugin components

Using plugin components is easy. Just put component inside `MglMap` components tree and pass necessary props to it.
Below is example for using [VueMapbox Geocoder](https://github.com/soal/vue-mapbox-geocoder).

```vue
<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle">
    <MglGeocoderControl
      :accessToken="accessToken"
      :input.sync="defaultInput"
      @results="handleSearch"
    />
  </MglMap>
</template>

<script>
import { MglMap } from "vue-mapbox";
import MglGeocoderControl from "vue-mapbox-geocoder";

export default {
  name: "App",

  components: {
    MglMap,
    MglGeocoderControl
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "some_style",
      defaultInput: "Bodhgaya"
    };
  },
  methods: {
    handleSearch(event) {
      console.log(event);
    }
  }
};
</script>
```

If you didn't find plugin your need, it's easy to implement plugin component yourself.
VueMapbox solves map loading task and give some useful helpers.
Check out development [documantation](/plugin_components/plugin_components_development.md).

## Available plugin components

- [VueMapbox Geocoder](https://github.com/soal/vue-mapbox-geocoder)
