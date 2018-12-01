const methods = [
  'setCenter',
  'fitBounds',
  'easeTo',
  'flyTo',
  'jumpTo',
  'panBy',
  'panTo',
  'setPitch',
  'setBearing',
  'rotateTo',
  'resetNorth',
  'snapToNorth',
  'zoomTo',
  'zoomIn',
  'zoomOut',
  'setZoom',
  'fitScreenCoordinates'
]

function makeMethods () {
  const actions = {}
  methods.forEach(name => {
    actions[name] = function (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions[name](...args)
      }
    }
  })
  return actions
}

export default {
  methods: {
    ...makeMethods(),
    cameraForBounds (...args) {
      return this.map.cameraForBounds(...args)
    }
  }
}
