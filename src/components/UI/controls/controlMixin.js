import withRegistration from '../../../lib/withRegistration'
import withEvents from '../../../lib/withEvents'

export default {
  mixins: [withRegistration, withEvents],
  beforeDestroy () {
    if (this.map !== undefined) {
      this.map.removeControl(this.control)
    }
  },

  render (h) {}
}
