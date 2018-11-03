export default {
  methods: {
    /** Bind events for markers and popups.
       * MapboxGL JS emits this events on popup or marker object,
       * so we treat them as 'self' events of theese objects
    */
    $_bindSelfEvents (events, emitter) {
      // console.log(Object.keys(this.$listeners), events)
      Object.keys(this.$listeners).forEach(eventName => {
        if (events.includes(eventName)) {
          emitter.on(eventName, this.$_emitSelfEvent)
        }
      })
    },

    $_unbindSelfEvents (events, emitter) {
      if (events.length === 0) return
      events.forEach(eventName => {
        emitter.off(eventName, this.$_emitSelfEvent)
      })
    }
  }
}
