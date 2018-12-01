export default {
  methods: {
    cameraForBounds (...args) {
      return this.map.cameraForBounds(...args)
    },

    setCenter (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.setCenter(...args)
      }
    },

    fitBounds (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.fitBounds(...args)
      }
    },

    easeTo (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.easeTo(...args)
      }
    },

    flyTo (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.flyTo(...args)
      }
    },

    jumpTo (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.jumpTo(...args)
      }
    },

    panBy (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.panBy(...args)
      }
    },

    panTo (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.panTo(...args)
      }
    },

    setPitch (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.setPitch(...args)
      }
    },

    setBearing (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.setBearing(...args)
      }
    },

    rotateTo (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.rotateTo(...args)
      }
    },

    resetNorth (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.resetNorth(...args)
      }
    },

    snapToNorth (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.snapToNorth(...args)
      }
    },

    zoomTo (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.zoomTo(...args)
      }
    },

    zoomIn (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.zoomIn(...args)
      }
    },

    zoomOut (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.zoomOut(...args)
      }
    },

    setZoom (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.setZoom(...args)
      }
    },

    fitScreenCoordinates (...args) {
      if (this.$_mapAsyncActions) {
        return this.$_mapAsyncActions.fitScreenCoordinates(...args)
      }
    }
  }
}
