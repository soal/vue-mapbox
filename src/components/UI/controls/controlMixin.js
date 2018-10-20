import baseMixin from '../../../lib/mixin'

export default {
  mixins: [baseMixin],
  beforeDestroy () {
    if (this.map !== undefined) {
      this.map.removeControl(this.control)
    }
  },

  render (h) {}
}
