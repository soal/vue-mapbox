import baseMixin from '../../lib/mixin'
import controlMixin from '../../lib/controlMixin'

export default {
  name: 'AttributionControl',
  mixins: [baseMixin, controlMixin],
  props: {
    compact: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      control: undefined
    }
  },

  created () {
    this.control = new this.mapbox.AttributionControl({ compact: this.compact })
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
