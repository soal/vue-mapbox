import promisify from 'map-promisified'

export default {
  created () {
    this.$_mapAsyncActions = null
  },

  methods: {
    $_registerAsyncActions (map) {
      this.$_mapAsyncActions = promisify(map)
    }
  }
}
