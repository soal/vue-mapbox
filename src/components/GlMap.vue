<template>
  <div :id="container" ref="container">
    <slot/>
  </div>
</template>

<script>
import mapEvents from '../lib/events'
import props from '../lib/options'

export default {
  name: 'GlMap',
  props,

  data() {
    return {
      initial: true,
      baseMap: true,
      mapLoaded: false
    }
  },

  computed: {
    loaded() { return this.map.loaded() },
    version() { return this.map.version },
    bounds() { return this.map.getBounds() },
    isStyleLoaded() { return this.map.isStyleLoaded() },
    areTilesLoaded() { return this.map.areTilesLoaded() },
    isMoving() { return this.map.isMoving() },
    canvas() { return this.map.getCanvas() },
    canvasContainer() { return this.map.getCanvasContainer() }
  },

  watch: {
    maxBounds(bounds) {
      if (this.initial) return
      this.map.setMaxBounds(bounds)
      this.maxBounds = bounds
    },
    minZoom(zoom) {
      if (this.initial) return
      this.map.setMinZoom(zoom)
      this.minZoom = zoom
    },
    maxZoom(zoom) {
      if (this.initial) return
      this.map.setMaxZoom(zoom)
      this.maxZoom = zoom
    },
    mapStyle(style) {
      if (this.initial) return
      this.map.setStyle(style)
      this.mapStyle = style
    },
    collisionBoxes(val) {
      if (this.initial) return
      this.map.showCollisionBoxes = val
      this.showCollisionBoxes = val
    },
    tileBoundaries(val) {
      if (this.initial) return
      this.map.showTileBoundaries = val
      this.showTileBoundaries = val
    },
    repaint(val) {
      if (this.initial) return
      this.map.repaint = val
      this.repaint = val
    },
    zoom(val) {
      if (this.initial) return
      this.map.setZoom(val)
      this.zoom = val
    },
    center(val) {
      if (this.initial) return
      this.map.setCenter(val)
      this.center = val
    },
    bearing(val) {
      if (this.initial) return
      this.map.setBearing(val)
      this.bearing = val
    },
    pitch(val) {
      if (this.initial) return
      this.map.setPitch(val)
      this.pitch = val
    },
    light(val) {
      if (this.initial) return
      this.map.setLight(val)
      this.light = val
    }
  },

  created() {
    this.map = null
  },

  mounted() {
    this.$_loadMap().then(map => {
      this.map = map
      if (this.RTLTextPluginUrl !== undefined) {
        map.setRTLTextPlugin(this.RTLTextPluginUrl, this.$_RTLTextPluginError)
      }
      this.$emit('load', { map, component: this })
      const eventNames = Object.keys(mapEvents)
      const eventsToListen = Object.keys(this.$options._parentListeners)
        .filter(eventName =>
          eventNames.indexOf(eventName) !== -1
        )

      this.$_bindEvents(eventsToListen)
      this.$_bindPropsUpdateEvents()
      this.initial = true
      this.mapLoaded = true
    })
  },

  destroyed() {
    if (this.map) this.map.remove()
  },

  methods: {
    // We wait in promise to ensure map is loaded and other components will receive map object
    $_bindPropsUpdateEvents() {
      this.map.on('moveend', event => this.$emit('update:center', this.map.getCenter()))
      this.map.on('zoomend', event => this.$emit('update:zoom', this.map.getZoom()))
      this.map.on('rotate', event => this.$emit('update:bearing', this.map.getBearing()))
      this.map.on('pitch', event => this.$emit('update:pitch', this.map.getPitch()))
    },
    $_loadMap() {
      return new Promise((resolve) => {
        if (this.accessToken) this.mapbox.accessToken = this.accessToken
        const map = new this.mapbox.Map({
          ...this._props,
          container: this.$el,
          style: this.mapStyle
        })
        map.on('load', () => resolve(map))
      })
    },

    $_RTLTextPluginError(error) {
      this.$emit('rtl-plugin-error', { map: this.map, error: error })
    },

    $_bindEvents(events) {
      if (events.length === 0) return
      for (let e of events) {
        this.map.on(e, event => {
          this.$emit(e, event)
        })
      }
    },

    $_unBindEvents(events) {
      events.forEach(eventName => {
        this.map.off(eventName)
      })
    },
    supported(perfomanceCheck = false) {
      return this.map.supported({ failIfMajorPerformanceCaveat: perfomanceCheck })
    },

    resize() {
      this.map.resize()
    },

    project(mapCoordinates) {
      return this.map.project(mapCoordinates)
    },

    unproject(containerCoordinates) {
      return this.map.unproject(containerCoordinates)
    },

    queryRenderedFeatures(geometry, parameters) {
      return this.map.queryRenderedFeatures(geometry, parameters)
    },

    querySourceFeatures(sourceId, parameters) {
      return this.map.querySourceFeatures(sourceId, parameters)
    },

    addImage(name, image, options) {
      this.map.addImage(name, image, options)
    },

    removeImage(name) {
      this.map.removeImage(name)
    },

    loadImage(url, callback) {
      this.map.loadImage(url, callback)
    },

    $_catchMoveFabric(eventData, resolve, reject) {
      let self = this
      return function catchMove(options) {
        if (options.eventId !== eventData.eventId) return
        let newCenter = self.map.getCenter()
        self.$emit('update:center', newCenter)
        self.map.off('moveend', catchMove)
        return resolve({ eventData, center: newCenter })
      }
    },

    $_catchZoomFabric(eventData, resolve, reject) {
      let self = this
      return function catchZoom(options) {
        if (options.eventId !== eventData.eventId) return
        let newZoom = self.map.getZoom()
        self.$emit('update:zoom', newZoom)
        self.map.off('zoomend', catchZoom)
        return resolve({ eventData, zoom: newZoom })
      }
    },

    $_catchRotateFabric(eventData, resolve, reject) {
      let self = this
      return function catchRotate(options) {
        if (options.eventId !== eventData.eventId) return
        let newBearing = self.map.getBearing()
        self.$emit('update:bearing', newBearing)
        self.map.off('rotate', catchRotate)
        resolve({ eventData, bearing: newBearing })
      }
    },

    $_catchPitchFabric(eventData, resolve, reject) {
      let self = this
      return function catchPitch(options) {
        if (options.eventId !== eventData.eventId) return
        let newPitch = self.map.getPitch()
        self.$emit('update:pitch', newPitch)
        self.map.off('pitch', catchPitch)
        resolve({ eventData, pitch: newPitch })
      }
    },

    panBy(offset, options) {
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

    panTo(coordinates, options) {
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
    },

    zoomTo(zoom, options) {
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

    zoomIn(options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `zoomIn-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
        this.map.zoomIn(options, eventData)
      })
    },

    zoomOut(options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `zoomOut-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('zoomend', this.$_catchZoomFabric(eventData, resolve, reject))
        this.map.zoomOut(options, eventData)
      })
    },

    rotateTo(bearing, options) {
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

    resetNorth(options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `resetNorth-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('rotate', this.$_catchRotateFabric(eventData, resolve, reject))
        this.map.resetNorth(options, eventData)
      })
    },

    snapToNorth(options) {
      return new Promise((resolve, reject) => {
        let eventData = {
          eventId: `snapToNorth-${('' + Math.random()).split('.')[1]}`
        }
        this.map.on('rotate', this.$_catchRotateFabric(eventData, resolve, reject))
        this.map.snapToNorth(options, eventData)
      })
    },

    fitBounds(bounds, options) {
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
    },

    jumpTo(options) {
      let eventData = {
        eventId: `jumpTo-${('' + Math.random()).split('.')[1]}`
      }
      let funcs = []
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
      this.map.jumpTo(options, eventData)

      return Promise.all(funcs).then(results => {
        let resObj = {}
        for (let res of results) {
          Object.assign(resObj, res)
        }
        return { ...resObj, eventData }
      })
    },

    easeTo(options) {
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
    },

    flyTo(options) {
      let eventData = {
        eventId: `flyTo-${('' + Math.random()).split('.')[1]}`
      }
      let funcs = []
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
      this.map.flyTo(options, eventData)
      return Promise.all(funcs).then(results => {
        let resObj = {}
        for (let res of results) {
          Object.assign(resObj, res)
        }
        return { ...resObj, eventData }
      })
    },

    stop() {
      this.map.stop()
      const [pitch, zoom, bearing, center] = [this.map.getPitch(), this.map.getZoom(), this.map.getBearing(), this.map.getCenter()]
      this.$emit('update:pitch', pitch)
      this.$emit('update:zoom', zoom)
      this.$emit('update:bearing', bearing)
      this.$emit('update:center', center)

      return Promise.resolve({
        pitch,
        zoom,
        bearing,
        center
      })
    }
  }
}
</script>
