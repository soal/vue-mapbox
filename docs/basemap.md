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

### Interact with map properties as GlMap props
You can control map parameters like zoom, bearing, pitch rtc. by changing prop. 
If you set .sync modifier ([Vue docs](https://vuejs.org/v2/guide/components.html#sync-Modifier)) to prop, it will updates when you use operations that takes time to proceed. For example, if you use flyTo method, props zoom, center, bearing, pitch will be updated when animation ends.
See example with flyTo:
example with flyTo
Full list of props see in API docs, note field 'Synced' in description

## Map methods
You can use methods of GlMap component to control map.
Mostly these methods a wraps methods of Map object from Mapbox GL JS, but processes all events, that map generates and returns Promise with all changed data when all operations ends.
For example GlMap.flyTo method returns Promise that resolves with object, contained changed bearing, zoom, center and pitch values.  
example with flyTo
   
### Method .stop()
   
Method .stop() just stops all animations on map, updates props with new positions and return Promise with map parameters in the moment when stop() called.  
See full list of methods on [API](api/glmap.md#methods) page.

