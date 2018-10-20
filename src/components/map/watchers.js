export default {
  watch: {
    maxBounds (bounds) {
      if (this.initial) return
      this.map.setMaxBounds(bounds)
      this.maxBounds = bounds
    },
    minZoom (zoom) {
      if (this.initial) return
      this.map.setMinZoom(zoom)
      this.minZoom = zoom
    },
    maxZoom (zoom) {
      if (this.initial) return
      this.map.setMaxZoom(zoom)
      this.maxZoom = zoom
    },
    mapStyle (style) {
      if (this.initial) return
      this.map.setStyle(style)
      this.mapStyle = style
    },
    collisionBoxes (val) {
      if (this.initial) return
      this.map.showCollisionBoxes = val
      this.showCollisionBoxes = val
    },
    tileBoundaries (val) {
      if (this.initial) return
      this.map.showTileBoundaries = val
      this.showTileBoundaries = val
    },
    repaint (val) {
      if (this.initial) return
      this.map.repaint = val
      this.repaint = val
    },
    zoom (val) {
      if (this.initial) return
      this.map.setZoom(val)
      this.zoom = val
    },
    center (val) {
      if (this.initial) return
      this.map.setCenter(val)
      this.center = val
    },
    bearing (val) {
      if (this.initial) return
      this.map.setBearing(val)
      this.bearing = val
    },
    pitch (val) {
      if (this.initial) return
      this.map.setPitch(val)
      this.pitch = val
    },
    light (val) {
      if (this.initial) return
      this.map.setLight(val)
      this.light = val
    }
  }
}
