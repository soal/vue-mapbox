import withRegistration from '../../../lib/withRegistration'

export default {
  mixins: [withRegistration],
  beforeDestroy () {
    if (this.map !== undefined) {
      this.map.removeControl(this.control)
    }
  },

  render (h) {}
}
