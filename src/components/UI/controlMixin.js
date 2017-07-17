export default {
  mounted() {
    this._checkMapTree()
  },
  beforeDestroy() {
    if (this.map !== undefined) {
      this.map.removeControl(this.control)
    }
  }
}
