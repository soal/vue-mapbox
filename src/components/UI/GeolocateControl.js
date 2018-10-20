import baseMixin from '../../lib/mixin'
import controlMixin from '../../lib/controlMixin'

export default {
  name: 'GeolocateControl',
  mixins: [baseMixin, controlMixin],

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

    this.control.on('error', err => {
      this.$emit('geolocate-error', err)
    })
    this.control.on('geolocate', position => {
      this.$emit('geolocate-error', position)
    })
  },

  methods: {
    $_deferredMount (payload) {
      this.map = payload.map
      this.map.addControl(this.control)
      this.$emit('added', this.control)
      payload.component.$off('load', this.$_deferredMount)
    }
  }
}
