export default {
  methods: {
    addImage (name, image, options) {
      return this.map.addImage(name, image, options)
    },

    hasImage (id) {
      return this.map.hasImage(id)
    },

    removeImage (name) {
      return this.map.removeImage(name)
    },

    loadImage (url, callback) {
      return this.map.loadImage(url, callback)
    }
  }
}
