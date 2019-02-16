# Composition

You can use Mapbox GL feature as Vue component and compose it as a child of GlMap. During creation all components waits until map properly initialized.

For example, adding map controls:

```vue
<template>
<div id="#app">
  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <MglNavigationControl position="top-right"/>
    <MglGeolocateControl position="top-right" />
  </mgl-map>
</div>
</template>

<script>
import { MglMap, MglNavigationControl, MglGeolocateControl } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "style_object"
    };
  }
};
</script>
```

Adding a popup:

```vue
<template>
  <div id="#app">
    <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
      <MglPopup :coordinates="popupCoordinates">
        <span>Hello world!</span>
      </MglPopup>
    </MglMap>
  </div>
</template>

<script>
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglPopup
} from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglPopup
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "style_object",
      popupCoordinates: [10, 10]
    };
  }
};
</script>
```

Vue-mapbox component will work even if it wrapped in another component as long as they in components sub-tree of base map component.

For example:

**_Popup wrapper_**:

```vue
<template>
  <div class="popup-wrapper">
    <MglPopup :coordinates="popupCoordinates">
      <span>Hello world from wrapped popup!</span>
    </MglPopup>
  </div>
</template>

<script>
import { MglPopup } from 'vue-mapbox';

export default {
  name: 'PopupWrapper'
  components: {
    MglPopup
  },
  computed() {
    popupCoordinates() {
      // Here we can do some work for calculate proper coordinates
      //...
      return [10, 10]
    }
  }
}
</script>
```

**_Main component_**:

```vue
<template>
  <div id="#app">
    <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
      <PopupWrapper />
      <!-- works! -->
    </MglMap>
  </div>
</template>

<script>
import { MglMap } from "vue-mapbox";
import PopupWrapper from "PopupWrapper"; // wrapper for popup

export default {
  components: {
    MglMap,
    PopupWrapper // wrapper for popup
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "style_object"
    };
  }
};
</script>
```

::: tip
VueMapbox internally use dependency injection mechanism (`provide/inject` in Vue [docs](https://vuejs.org)). It means that any component in `MglMap` sub-tree can access to `map`, `mapbox` and `actions` through `inject` property.
:::

After successful mount all components emits `added` envent with Vue component object and additional data, such as corresponding Mapbox GL JS object or object containing layer id in payload.
