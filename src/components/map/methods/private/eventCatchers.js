export default {
  methods: {
    $_catchMoveFabric (eventData, resolve, reject) {
      let self = this
      return function catchMove (options) {
        if (options.eventId !== eventData.eventId) return
        let newCenter = self.map.getCenter()
        self.$emit('update:center', newCenter)
        self.map.off('moveend', catchMove)
        return resolve({ eventData, center: newCenter })
      }
    },

    $_catchZoomFabric (eventData, resolve, reject) {
      let self = this
      return function catchZoom (options) {
        if (options.eventId !== eventData.eventId) return
        let newZoom = self.map.getZoom()
        self.$emit('update:zoom', newZoom)
        self.map.off('zoomend', catchZoom)
        return resolve({ eventData, zoom: newZoom })
      }
    },

    $_catchRotateFabric (eventData, resolve, reject) {
      let self = this
      return function catchRotate (options) {
        if (options.eventId !== eventData.eventId) return
        let newBearing = self.map.getBearing()
        self.$emit('update:bearing', newBearing)
        self.map.off('rotate', catchRotate)
        resolve({ eventData, bearing: newBearing })
      }
    },

    $_catchPitchFabric (eventData, resolve, reject) {
      let self = this
      return function catchPitch (options) {
        if (options.eventId !== eventData.eventId) return
        let newPitch = self.map.getPitch()
        self.$emit('update:pitch', newPitch)
        self.map.off('pitch', catchPitch)
        resolve({ eventData, pitch: newPitch })
      }
    }
  }
}
