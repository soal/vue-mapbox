const watchers = {
  maxBounds(next) {
    this.map.setMaxBounds(next);
  },
  minZoom(next) {
    this.map.setMinZoom(next);
  },
  maxZoom(next) {
    this.map.setMaxZoom(next);
  },
  mapStyle(next) {
    this.map.setStyle(next);
  },
  // TODO: make 'bounds' synced prop
  // bounds (next) { this.map.fitBounds(next, { linear: true, duration: 0 }) },
  collisionBoxes(next) {
    this.map.showCollisionBoxes = next;
  },
  tileBoundaries(next) {
    this.map.showTileBoundaries = next;
  },
  repaint(next) {
    this.map.repaint = next;
  },
  zoom(next) {
    this.map.setZoom(next);
  },
  center(next) {
    this.map.setCenter(next);
  },
  bearing(next) {
    this.map.setBearing(next);
  },
  pitch(next) {
    this.map.setPitch(next);
  },
  light(next) {
    this.map.setLigh(next);
  }
};

function watcher(prop, callback, next, prev) {
  if (this.initial) return;
  if (this.$listeners[`update:${prop}`]) {
    if (this.propsIsUpdating[prop]) {
      this._watcher.active = false;
      this.$nextTick(() => {
        this._watcher.active = true;
      });
    } else {
      this._watcher.active = true;
      callback(next, prev);
    }
    this.propsIsUpdating[prop] = false;
  } else {
    callback(next, prev);
  }
}

function makeWatchers() {
  const wrappers = {};
  Object.entries(watchers).forEach(prop => {
    wrappers[prop[0]] = function(next, prev) {
      return watcher.call(this, prop[0], prop[1].bind(this), next, prev);
    };
  });
  return wrappers;
}

export default {
  watch: makeWatchers()
};
