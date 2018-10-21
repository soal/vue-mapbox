export default {
  methods: {
    cameraForBounds (bounds, options) {
      return this.map.cameraForBounds(bounds, options)
    },

    fitBounds (bounds, options) {
      let eventData = {
        eventId: `fitBounds-${('' + Math.random()).split('.')[1]}`
      }
      if (bounds === this.map.getBounds()) {
        return new Promise((resolve, reject) => resolve({ eventData, bounds: this.map.getBounds() }))
      }
      let zoomFunc = new Promise((resolve, reject) => {
        this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
      })

      let moveFunc = new Promise((resolve, reject) => {
        this.map.on('moveend', this.$_catchMoveFabric(eventData, resolve, reject))
      })
      this.map.fitBounds(bounds, options, eventData)
      return Promise.all([zoomFunc, moveFunc]).then(results => {
        return { eventData, bounds: this.map.getBounds() }
      })
    }
  }
}