export default {
  methods: {
    project (mapCoordinates) {
      return this.map.project(mapCoordinates)
    },

    unproject (containerCoordinates) {
      return this.map.unproject(containerCoordinates)
    }
  }
}
