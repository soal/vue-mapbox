import imageMethods from './image'
import featureMethods from './feature'
import rotateMethods from './rotate'
import zoomMethods from './zoom'
import easeMethods from './ease'
import flyMethods from './fly'
import panMethods from './pan'
import jumpMethods from './jump'
import projectMethods from './project'
import boundsMethods from './bounds'
import stopMethods from './stop'

export default {
  mixins: [
    imageMethods,
    featureMethods,
    rotateMethods,
    zoomMethods,
    easeMethods,
    flyMethods,
    panMethods,
    jumpMethods,
    projectMethods,
    boundsMethods,
    stopMethods
  ],

  methods: {
    supported (perfomanceCheck = false) {
      return this.map.supported({ failIfMajorPerformanceCaveat: perfomanceCheck })
    },

    resize () {
      this.map.resize()
    }
  }
}
