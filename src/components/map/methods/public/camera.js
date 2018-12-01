export default {
  methods: {
    cameraForBounds (bounds, options) {
      return this.map.cameraForBounds(bounds, options)
    },

    fitBounds (bounds, options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.fitBounds(bounds, options)
      }
    },

    easeTo (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.easeTo(options)
      }
    },

    flyTo (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.flyTo(options)
      }
    },

    jumpTo (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.jumpTo(options)
      }
    },

    panBy (offset, options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.panBy(offset, options)
      }
    },

    panTo (coordinates, options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.panTo(coordinates, options)
      }
    },

    rotateTo (bearing, options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.rotateTo(bearing, options)
      }
    },

    resetNorth (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.resetNorth(options)
      }
    },

    snapToNorth (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.snapToNorth(options)
      }
    },

    zoomTo (zoom, options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.zoomTo(zoom, options)
      }
    },

    zoomIn (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.zoomIn(options)
      }
    },

    zoomOut (options) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.zoomOut(options)
      }
    }
  }
}
