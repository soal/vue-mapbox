<template>
  <div :id="container" ref="container">
    <slot/>
  </div>
</template>

<script>
import mapEvents from './events'
import props from './options'
import watchers from './watchers'
import eventCatchers from './methods/private/eventCatchers'

import publicMethods from './methods/public'

export default {
  name: 'GlMap',

  mixins: [
    watchers,
    eventCatchers,
    publicMethods
  ],

  props,

  data () {
    return {
      initial: true,
      baseMap: true,
      mapLoaded: false
    }
  },

  computed: {
    loaded () { return this.map ? this.map.loaded() : false },
    version () { return this.map ? this.map.version : null },
    bounds () { return this.map ? this.map.getBounds() : null },
    isStyleLoaded () { return this.map ? this.map.isStyleLoaded() : false },
    areTilesLoaded () { return this.map ? this.map.areTilesLoaded() : false },
    isMoving () { return this.map ? this.map.isMoving() : false },
    canvas () { return this.map ? this.map.getCanvas() : null },
    canvasContainer () { return this.map ? this.map.getCanvasContainer() : null },
    images () { return this.map ? this.map.listImages() : null }
  },

  created () {
    this.map = null
  },

  mounted () {
    this.$_loadMap().then(map => {
      this.map = map
      if (this.RTLTextPluginUrl !== undefined) {
        map.setRTLTextPlugin(this.RTLTextPluginUrl, this.$_RTLTextPluginError)
      }
      const eventNames = Object.keys(mapEvents)
      const eventsToListen = Object.keys(this.$options._parentListeners)
        .filter(eventName =>
          eventNames.indexOf(eventName) !== -1
        )

      this.$_bindEvents(eventsToListen)
      this.$_bindPropsUpdateEvents()
      this.initial = false
      this.mapLoaded = true
      this.$emit('load', { map, component: this })
    })
  },

  updated () {
    console.log('MAP UPDATED!')
  },

  destroyed () {
    if (this.map) this.map.remove()
  },

  methods: {
    // We wait in promise to ensure map is loaded and other components will receive map object
    $_bindPropsUpdateEvents () {
      this.map.on('moveend', event => this.$emit('update:center', this.map.getCenter()))
      this.map.on('zoomend', event => this.$emit('update:zoom', this.map.getZoom()))
      this.map.on('rotate', event => this.$emit('update:bearing', this.map.getBearing()))
      this.map.on('pitch', event => this.$emit('update:pitch', this.map.getPitch()))
    },
    $_loadMap () {
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

    $_RTLTextPluginError (error) {
      this.$emit('rtl-plugin-error', { map: this.map, error: error })
    },

    $_bindEvents (events) {
      if (events.length === 0) return
      for (let e of events) {
        this.map.on(e, event => {
          this.$emit(e, event)
        })
      }
    },

    $_unBindEvents (events) {
      events.forEach(eventName => {
        this.map.off(eventName)
      })
    },
    supported (perfomanceCheck = false) {
      return this.map.supported({ failIfMajorPerformanceCaveat: perfomanceCheck })
    },

    resize () {
      this.map.resize()
    },

    project (mapCoordinates) {
      return this.map.project(mapCoordinates)
    },

    unproject (containerCoordinates) {
      return this.map.unproject(containerCoordinates)
    },

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
    },

    stop () {
      this.map.stop()
      const [pitch, zoom, bearing, center] = [
        this.map.getPitch(),
        this.map.getZoom(),
        this.map.getBearing(),
        this.map.getCenter()
      ]
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
