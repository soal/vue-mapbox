export default {
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
