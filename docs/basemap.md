# Base map
## Adding map component

For using maps with Mapbox GL JS you need a map style. See details in Mapbox GL JS [documentation](https://mapbox.com/mapbox-gl-js/style-spec).  
For using Mapbox-hosted maps, you need to set access_token. See details in Mapbox [documentation](https://mapbox.com/help/define-access-token/).  
If you using self-hosting maps on your own server you can omit this parameter.  

#### Template
```vue
<mgl-map
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
/>
```

#### JavaScript
```javascript
import { MglMap } from 'vue-mapbox'

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: MAP_STYLE, // your map style
    }
  }
}
```
