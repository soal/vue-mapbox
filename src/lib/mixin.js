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
          walkParents(component.$parent)
        }
      }
      walkParents(this.$parent)
      if (baseMapComponent === undefined) {
        throw new Error('Component must have root map')
      }
      return baseMapComponent
    }
  }
}
