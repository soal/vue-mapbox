export default {
  methods: {
    $_catchMoveFabric (eventData, resolve, reject) {
      const catchMove = options => {
        if (options.eventId !== eventData.eventId) return
        let newCenter = this.map.getCenter()
        this.$emit('update:center', newCenter)
        this.map.off('moveend', catchMove)
        return resolve({ eventData, center: newCenter })
      }
      return catchMove
    },

    $_catchZoomFabric (eventData, resolve, reject) {
      const catchZoom = options => {
        if (options.eventId !== eventData.eventId) return
        let newZoom = this.map.getZoom()
        this.$emit('update:zoom', newZoom)
        this.map.off('zoomend', catchZoom)
        return resolve({ eventData, zoom: newZoom })
      }
      return catchZoom
    },

    $_catchRotateFabric (eventData, resolve, reject) {
      const catchRotate = options => {
        if (options.eventId !== eventData.eventId) return
        let newBearing = self.map.getBearing()
        self.$emit('update:bearing', newBearing)
        self.map.off('rotate', catchRotate)
        resolve({ eventData, bearing: newBearing })
      }
      return catchRotate
    },

    $_catchPitchFabric (eventData, resolve, reject) {
      const catchPitch = options => {
        if (options.eventId !== eventData.eventId) return
        let newPitch = self.map.getPitch()
        self.$emit('update:pitch', newPitch)
        self.map.off('pitch', catchPitch)
        resolve({ eventData, pitch: newPitch })
      }
      return catchPitch
    }
  }
}
