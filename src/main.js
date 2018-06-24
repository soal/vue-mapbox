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
import VectorLayer from './components/layer/VectorLayer.vue'

import baseMixin from './lib/mixin'
import controlMixin from './lib/controlMixin'

export const mglBaseMixin = baseMixin
export const mglControlMixin = controlMixin

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
export const MglVectorLayer = VectorLayer

export const MglMarker = Marker
export const MglPopup = Popup

export const plugin = {

  /**
   *  Create Vue-mapbox plugin for Vue
   *
   * @param {Object} Vue
   * @param {Object} options: mapboxgl: MapboxGl JS instances
   * @returns
   */
  install(Vue, options = {}) {
    const data = { mapbox: options.mapboxgl }
    if (options.plugins && options.plugins.length) {
      options.plugins.forEach(plugin => {
        const key = Object.keys(plugin)[0]
        const value = Object.values(plugin)[0]
        data[key] = value
      })
    }
    Vue.mixin({ data() { return data } })
  }
}

export default plugin
