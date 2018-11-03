import controlMixin from './controlMixin'
import withEvents from '../../../lib/withEvents'

const geolocationEvents = {
  trackuserlocationstart: 'trackuserlocationstart',
  trackuserlocationend: 'trackuserlocationend',
  geolocate: 'geolocate',
  error: 'error'
}

export default {
  name: 'GeolocateControl',
  mixins: [withEvents, controlMixin],

  props: {
    position: {
      type: String,
      default: 'top-right'
    },
    positionOptions: {
      type: Object,
      default () {
        return {
          enableHighAccuracy: false,
          timeout: 6000
        }
      }
    },
    trackUserLocation: {
      type: Boolean,
      default: false
    },
    showUserLocation: {
      type: Boolean,
      default: true
    },
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 })
    }
  },

  data () {
    return {
      control: undefined
    }
  },

  created () {
    this.control = new this.mapbox.GeolocateControl(this._props)

    this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control)
  },

  methods: {
    $_deferredMount (payload) {
      this.map = payload.map
      this.map.addControl(this.control, this.position)
      this.$_emitEvent('added', { control: this.control })
      payload.component.$off('load', this.$_deferredMount)
    },

    $_emitSelfEvent (event) {
      if (event.type === 'error') {
        this.$_emitEvent('geolocate-error', { mapboxEvent: event })
      }
      if (event.type === 'geolocate') {
        this.$_emitEvent('geolocate', { mapboxEvent: event })
      }
    },

    trigger () {
      if (this.control) {
        return this.control.trigger()
      }
    }
  }
}
