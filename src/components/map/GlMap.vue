<template>
  <div class="mgl-map-wrapper">
    <div v-once :id="container" ref="container"/>
    <slot />
  </div>
</template>

<script>
import withEvents from '../../lib/withEvents'
import mapEvents from './events'
import props from './options'
import withWatchers from './withWatchers'
import withPrivateMethods from './methods/private'
import withPublicMethods from './methods/public'

export default {
  name: 'GlMap',

  mixins: [
    withWatchers,
    withPrivateMethods,
    withPublicMethods,
    withEvents
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
    this.propsIsUpdating = {}
  },

  mounted () {
    this.$_loadMap().then(map => {
      this.map = map
      if (this.RTLTextPluginUrl !== undefined) {
        map.setRTLTextPlugin(this.RTLTextPluginUrl, this.$_RTLTextPluginError)
      }
      const eventNames = Object.keys(mapEvents)
      this.$_bindMapEvents(eventNames)
      // this.$_bindSelfEvents(eventNames, this.map, null, event => {
      //   return { type: event.type } // TODO: Add info about current event
      // })
      this.$_bindPropsUpdateEvents()
      this.initial = false
      this.mapLoaded = true
      this.$emit('load', { map, component: this })
    })
  },

  beforeDestroy () {
    if (this.map) this.map.remove()
  },

  methods: {
    $_updateSyncedPropsFabric (prop, data) {
      return event => {
        this.propsIsUpdating[prop] = true
        let info = typeof data === 'function' ? data() : data
        return this.$emit(`update:${prop}`, info)
      }
    },
    $_bindPropsUpdateEvents () {
      const syncedProps = [
        { event: 'moveend', prop: 'center', getter: this.map.getCenter.bind(this.map) },
        { event: 'zoomend', prop: 'zoom', getter: this.map.getZoom.bind(this.map) },
        { event: 'rotate', prop: 'bearing', getter: this.map.getBearing.bind(this.map) },
        { event: 'pitch', prop: 'pitch', getter: this.map.getPitch.bind(this.map) }
      ]
      syncedProps.forEach(({ event, prop, getter }) => {
        if (this.$listeners[`update:${prop}`]) {
          this.map.on(event, this.$_updateSyncedPropsFabric(prop, getter))
        }
      })
    },
    $_loadMap () {
      return new Promise((resolve) => {
        if (this.accessToken) this.mapbox.accessToken = this.accessToken
        const map = new this.mapbox.Map({
          ...this._props,
          container: this.$refs.container,
          style: this.mapStyle
        })
        map.on('load', () => resolve(map))
      })
    },

    $_RTLTextPluginError (error) {
      this.$emit('rtl-plugin-error', { map: this.map, error: error })
    },

    $_bindMapEvents (events) {
      Object.keys(this.$listeners).forEach(eventName => {
        if (events.includes(eventName)) {
          this.map.on(eventName, this.$_emitMapEvent)
        }
      })
    },

    $_unbindEvents (events) {
      events.forEach(eventName => {
        this.map.off(eventName, this.$_emitMapEvent)
      })
    }
  }
}
</script>
