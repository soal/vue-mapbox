import controlMixin from './controlMixin'

export default {
  name: 'ScaleControl',
  mixins: [controlMixin],

  props: {
    maxWidth: {
      type: Number,
      default: 150
    },
    unit: {
      type: String,
      default: 'metric'
    }
  },

  data () {
    return {
      control: undefined
    }
  },

  created () {
    this.control = new this.mapbox.ScaleControl(this._props)
  },

  methods: {
    $_deferredMount (payload) {
      this.map = payload.map
      try {
        this.map.addControl(this.control)
      } catch (err) {
        console.log(err)
      }
      this.$emit('added', this.control)
      payload.component.$off('load', this.$_deferredMount)
    }
  }
}
