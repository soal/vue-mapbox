export default {
  beforeDestroy () {
    if (this.map !== undefined) {
      this.map.removeControl(this.control)
    }
  }
}
