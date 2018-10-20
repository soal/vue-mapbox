export default {
  methods: {
    easeTo (options) {
      let funcs = []
      let eventData = {
        eventId: `easeTo-${('' + Math.random()).split('.')[1]}`
      }
      if (options.bearing !== undefined && options.bearing !== this.map.getBearing()) {
        let rotateFunc = new Promise((resolve, reject) => {
          this.map.on('rotate', this.$_catchRotateFabric(eventData, resolve, reject))
        })
        funcs.push(rotateFunc)
      }
      if (options.zoom !== undefined && options.zoom !== this.map.getZoom()) {
        let zoomFunc = new Promise((resolve, reject) => {
          this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
        })
        funcs.push(zoomFunc)
      }
      if (options.center !== undefined && options.center !== this.map.getCenter()) {
        let centerFunc = new Promise((resolve, reject) => {
          this.map.on('moveend', this.$_catchMoveFabric(eventData, resolve, reject))
        })
        funcs.push(centerFunc)
      }
      if (options.pitch !== undefined && options.pitch !== this.map.getPitch()) {
        let pitchFunc = new Promise((resolve, reject) => {
          this.map.on('pitch', this.$_catchPitchFabric(eventData, resolve, reject))
        })
        funcs.push(pitchFunc)
      }
      if (funcs.length === 0) {
        return new Promise((resolve, reject) => {
          resolve({
            eventData,
            pitch: this.map.getPitch(),
            zoom: this.map.getZoom(),
            center: this.map.getCenter(),
            bearing: this.map.getBearing()
          })
        })
      }
      this.map.easeTo(options, eventData)

      return Promise.all(funcs).then(results => {
        let resObj = {}
        for (let res of results) {
          Object.assign(resObj, res)
        }
        return { ...resObj, eventData }
      })
    }
  }
}
