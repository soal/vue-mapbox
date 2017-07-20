export default {
  mounted() {
    this._checkMapTree()
    // We wait for "load" event from map component to ensure mapbox is loaded and map created
  },

  methods: {
    _findBaseMap() {
      let baseMapComponent
      function walkParents(component) {
        if (component.baseMap) {
          baseMapComponent = component
        } else {
          if (component.$parent !== undefined) {
            walkParents(component.$parent)
          }
        }
      }
      walkParents(this.$parent)
      if (baseMapComponent === undefined) {
        throw new Error('Component must have root map')
      }
      return baseMapComponent
    },
    _checkMapTree() {
      let mapComponent = this._findBaseMap()
      if (mapComponent.mapLoaded) {
        this._deferredMount({ component: mapComponent, map: mapComponent.map })
      } else {
        mapComponent.$once('mgl-load', this._deferredMount)
      }
    },
    _emitMapEvent(name, data={}) {
      this.$emit(name, {
        map: this.map,
        component: this,
        ...data
      })
    }
  }
}
