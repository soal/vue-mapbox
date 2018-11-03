import controlMixin from './controlMixin'

export default {
  name: 'NavigationControl',
  mixins: [controlMixin],
  props: {
    position: {
      type: String,
      default: 'top-right' // TODO: add validator
    }
  },

  data () {
    return {
      control: undefined
    }
  },

  created () {
    this.control = new this.mapbox.NavigationControl()
  },

  methods: {
    $_deferredMount (payload) {
      this.map = payload.map
      this.map.addControl(this.control, this.position)
      this.$_emitEvent('added', { control: this.control })

      payload.component.$off('load', this.$_deferredMount)
    }
  }
}
