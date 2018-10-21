export default {
  methods: {
    $_emitMapEvent (name, data = {}) {
      this.$emit(name, {
        map: this.map,
        component: this,
        ...data
      })
    },

    $_bindSelfEvents (events, emitter = null, objId = null, data) {
      if (this.$options._parentListeners) {
        const eventsToListen = Object.keys(this.$options._parentListeners)
          .filter(eventName =>
            events.indexOf(eventName) !== -1
          )
        if (eventsToListen.length === 0) return
        emitter = emitter || this.map
        const args = []
        eventsToListen.forEach(eventName => {
          let info = {}
          args.push(`${eventName}`)
          if (objId) args.push(objId)
          args.push(event => {
            info = typeof data === 'function' ? data(event) : data
            this.$_emitMapEvent(`${eventName}`, { mapEvent: event, info })
          })
          emitter.on(...args)
        })
      }
    },

    $_unbindSelfEvents (events, emitter = null, objId = null) {
      if (events.length === 0) return
      emitter = emitter || this.map
      events.forEach(eventName => {
        const args = [eventName]
        if (objId) args.push(objId)
        emitter.off(...args)
      })
    }
  }
}
