import imageMethods from './image'
import featureMethods from './feature'
import rotateMethods from './rotate'
import zoomMethods from './zoom'
import easeMethods from './ease'
import flyMethods from './fly'
import panMethods from './pan'
import jumpMethods from './jump'

export default {
  mixins: [
    imageMethods,
    featureMethods,
    rotateMethods,
    zoomMethods,
    easeMethods,
    flyMethods,
    panMethods,
    jumpMethods
  ]
}
