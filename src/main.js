import GlMap from './components/GlMap.vue'
import NavigationControl from './components/UI/NavigationControl.vue'
import GeolocateControl from './components/UI/GeolocateControl.vue'
import FullscreenControl from './components/UI/FullscreenControl.vue'
import AttributionControl from './components/UI/AttributionControl.vue'
import ScaleControl from './components/UI/ScaleControl.vue'
import Marker from './components/UI/Marker.vue'
import Popup from './components/UI/Popup.vue'

import GeojsonLayer from './components/layer/GeojsonLayer.vue'
import ImageLayer from './components/layer/ImageLayer.vue'
import CanvasLayer from './components/layer/CanvasLayer.vue'
import VideoLayer from './components/layer/VideoLayer.vue'

export const MglMap = GlMap

export const MglNavigationControl = NavigationControl
export const MglGeolocateControl = GeolocateControl
export const MglFullscreenControl = FullscreenControl
export const MglAttributionControl = AttributionControl
export const MglScaleControl = ScaleControl

export const MglGeojsonLayer = GeojsonLayer
export const MglImageLayer = ImageLayer
export const MglCanvasLayer = CanvasLayer
export const MglVideoLayer = VideoLayer

export const MglMarker = Marker
export const MglPopup = Popup

export default {
  install(Vue, options) {
    Vue.mixin({
      data() {
        return {
          mapbox: options.mapboxgl
        }
      }
    })
  }
}
