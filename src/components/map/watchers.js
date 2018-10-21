export default {
  watch: {
    maxBounds (bounds) {
      if (this.initial) return
      this.map.setMaxBounds(bounds)
    },
    minZoom (zoom) {
      if (this.initial) return
      this.map.setMinZoom(zoom)
    },
    maxZoom (zoom) {
      if (this.initial) return
      this.map.setMaxZoom(zoom)
    },
    mapStyle (style) {
      if (this.initial) return
      this.map.setStyle(style)
    },
    collisionBoxes (val) {
      if (this.initial) return
      this.map.showCollisionBoxes = val
    },
    tileBoundaries (val) {
      if (this.initial) return
      this.map.showTileBoundaries = val
    },
    repaint (val) {
      if (this.initial) return
      this.map.repaint = val
    },
    zoom (val) {
      if (this.initial) return
      if (this._watcher.active) {
        this.map.setZoom(val)
      } else {
        this.$nextTick(() => {
          this._watcher.active = false
        })
      }
    },
    center (val) {
      if (this.initial) return
      if (this._watcher.active) {
        this.map.setCenter(val)
      } else {
        this.$nextTick(() => {
          // console.log('NEXT TICK ')
          this._watcher.active = false
        })
      }
      // this.map.setCenter(val)
    },
    bearing (val) {
      if (this.initial) return
      this.map.setBearing(val)
    },
    pitch (val) {
      if (this.initial) return
      this.map.setPitch(val)
    },
    light (val) {
      if (this.initial) return
      this.map.setLight(val)
    }
  }
}
