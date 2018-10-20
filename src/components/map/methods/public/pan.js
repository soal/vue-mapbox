export default {
  methods: {
    panBy (offset, options) {
      const eventData = {
        eventId: `panBy-${('' + Math.random()).split('.')[1]}`
      }
      if (offset[0] === 0 && offset[1] === 0) {
        return new Promise((resolve, reject) => resolve({ center: this.map.getCenter() }))
      }
      return new Promise((resolve, reject) => {
        this.map.on('moveend', this.$_catchMoveFabric(eventData, resolve, reject))
        this.map.panBy(offset, options, eventData)
      })
    },

    panTo (coordinates, options) {
      if (!(coordinates instanceof Array)) {
        coordinates = coordinates.toArray()
      }
      const eventData = {
        eventId: `panTo-${('' + Math.random()).split('.')[1]}`
      }
      if (coordinates[0] === 0 && coordinates[1] === 0) {
        return new Promise((resolve, reject) => resolve({ eventData, center: this.map.getCenter() }))
      }
      return new Promise((resolve, reject) => {
        this.map.on('moveend', this.$_catchMoveFabric(eventData, resolve, reject))
        this.map.panTo(coordinates, options, eventData)
      })
    }
  }
}
