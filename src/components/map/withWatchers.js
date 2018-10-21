const watchers = {
  maxBounds (val) { this.map.setMaxBounds(val) },
  minZoom (val) { this.map.setMinZoom(val) },
  maxZoom (val) { this.map.setMaxZoom(val) },
  mapStyle (val) { this.map.setStyle(val) },
  collisionBoxes (val) { this.map.showCollisionBoxes = val },
  tileBoundaries (val) { this.map.showTileBoundaries = val },
  repaint (val) { this.map.repaint = val },
  zoom (next, prev) { this.map.setZoom(next) },
  center (val) { this.map.setCenter(val) },
  bearing (val) { this.map.setBearing(val) },
  pitch (val) { this.map.setPitch(val) },
  light (val) { this.map.setLigh(val) }
}

function watcher (prop, callback, next, prev) {
  if (this.initial) return
  if (this.$listeners[`update:${prop}`]) {
    if (this.propsIsUpdating[prop]) {
      this._watcher.active = false
      this.$nextTick(() => {
        this._watcher.active = true
      })
    } else {
      this._watcher.active = true
      callback(next, prev)
    }
    this.propsIsUpdating[prop] = false
  } else {
    callback(next, prev)
  }
}

function makeWatchers () {
  const wrappers = {}
  Object.entries(watchers).forEach(prop => {
    wrappers[prop[0]] = function (next, prev) {
      return watcher.call(this, prop[0], prop[1].bind(this), next, prev)
    }
  })
  return wrappers
}

export default {
  watch: makeWatchers()
}
