import imageMethods from './image'
import featureMethods from './feature'
import projectMethods from './project'
import cameraMethods from './camera'
import stopMethods from './stop'

export default {
  mixins: [
    imageMethods,
    featureMethods,
    projectMethods,
    cameraMethods,
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
