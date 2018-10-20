export default {
  methods: {
    rotateTo (bearing, options) {
      if (bearing === this.map.getBearing()) {
        return new Promise((resolve, reject) => resolve({ bearing: this.map.getBearing() }))
      }
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `rotateTo-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('rotate', this.$_catchRotateFabric(eventData, resolve, reject))
        this.map.rotateTo(bearing, options, eventData)
      })
    },

    resetNorth (options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `resetNorth-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('rotate', this.$_catchRotateFabric(eventData, resolve, reject))
        this.map.resetNorth(options, eventData)
      })
    },

    snapToNorth (options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `snapToNorth-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('rotate', this.$_catchRotateFabric(eventData, resolve, reject))
        this.map.snapToNorth(options, eventData)
      })
    }
  }
}
