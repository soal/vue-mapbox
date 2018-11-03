import withRegistration from '../../../lib/withRegistration'
import withEvents from '../../../lib/withMapEvents'

export default {
  mixins: [withRegistration, withEvents],
  beforeDestroy () {
    if (this.map !== undefined) {
      this.map.removeControl(this.control)
    }
  },

  render (h) {}
}
