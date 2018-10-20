export default {
  methods: {
    zoomTo (zoom, options) {
      const eventData = {
        eventId: `zoomTo-${('' + Math.random()).split('.')[1]}`
      }
      if (zoom === this.map.getZoom()) {
        return new Promise((resolve, reject) => resolve({ eventData, zoom: this.map.getZoom() }))
      }
      return new Promise((resolve, reject) => {
        this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
        this.map.zoomTo(zoom, options, eventData)
      })
    },

    zoomIn (options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `zoomIn-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
        this.map.zoomIn(options, eventData)
      })
    },

    zoomOut (options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `zoomOut-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
        this.map.zoomOut(options, eventData)
      })
    }
  }
}
