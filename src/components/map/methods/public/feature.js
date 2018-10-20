export default {
  methods: {
    queryRenderedFeatures (geometry, parameters) {
      return this.map.queryRenderedFeatures(geometry, parameters)
    },

    getFeatureState (feature) {
      return this.map.getFeatureState(feature)
    },

    setFeatureState (feature, state) {
      return this.map.setFeatureState(feature, state)
    },

    querySourceFeatures (sourceId, parameters) {
      return this.map.querySourceFeatures(sourceId, parameters)
    }
  }
}
