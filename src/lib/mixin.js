export default {
  methods: {
    _checkMapId() {
      if (this.mapId === undefined) {
        if ((this.$parent.container && this.$parent.container.indexOf('map') === 0)) {
          this.mapId = this.$parent.container
        } else if (this.$parent.mapId !== undefined) {
          this.mapId = this.$parent.mapId
        } else {
          throw new Error(`Component ${this.name} needs mapId in props or component with mapId property as $parent`)
        }
      }
    },
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
        mapComponent.$on('mgl-load', this._deferredMount)
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
