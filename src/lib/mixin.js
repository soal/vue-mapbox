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
    }
  }
}
