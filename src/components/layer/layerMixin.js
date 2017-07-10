import events from '../../lib/layerEvents';

let mapboxSourceProps = {
  sourceId: {
    type: String
  }
}

let mapboxLayerStyleProps = {
  layerId: {
    type: String,
    required: true
  },
  metadata: Object,
  refLayer: String,
  'source-layer': String,
  minzoom: Number,
  maxzoom: Number,
  paint: Object,
  before: Object
}

let componentProps = {
  eventsToListen: {
    validator(eventsArray) {
      if (!(eventsArray instanceof Array)) {
        return false;
      }
      for (let e of eventsArray) {
        if (!events.includes(e)) return false;
      }
      return true;
    },
    default: () => []
  },
  clearSource: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  },
  replaceSource: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  }
}

import bus from '../../messageBus';
import layerEvents from '../../lib/layerEvents';

export default {
  props: {
    ...mapboxSourceProps,
    ...mapboxLayerStyleProps,
    ...componentProps
  },

  data() {
    return {
      initial: true,
      map: undefined
    }
  },

  computed: {
    sourceLoaded() {
      return this.map.isSourceLoaded(this.sourceId);
    },
    mapLayer() {
      return this.map.getLayer(this.layerId);
    }
  },

  watch: {
    eventsToListen(events) {
      if (this.initial) return;
      this.unBindEvents(layerEvents);
      this.bindEvents(events);
    }
  },

  beforeDestroy() {
    if (this.map) {
      this.map.removeLayer(this.layerId);
      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId)
        } catch (error) {
          this.$emit('mgl-source-does-not-exist', error);
          bus.$emit('mgl-source-does-not-exist', error);
        }
      }
    }
  },

  methods: {
    _bindEvents(events) {
      if (events.length === 0) return;
      events.forEach(eventName => {
        this.map.on(eventName, this.layerId, event => {
          this.$emit(`mgl-${ event }`, event);
        })
      });
    },

    _unBindEvents(events) {
      events.forEach(eventName => {
        this.map.off(eventName, this.layerId);
      });
    },

    _watchSourceLoading(data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this._emitSourceLoading();
        this.map.off('dataloading', this.watchSourceLoading)
      }
    },

    _emitMapEvent(name, data={}) {
      this.$emit(name, {
        map: this.map,
        component: this,
        ...data
      });
      bus.$emit(name, {
        map: this.map,
        component: this,
        ...data
      });
    },

    _emitSourceLoading() {
      this._emitMapEvent('mgl-layer-source-loading', { sourceId: this.sourceId });
    },

    _emitSourceError(error) {
      this._emitMapEvent('mgl-layer-source-error', { sourceId: this.sourceId, error });
    },

    _emitLayerError(error) {
      this._emitMapEvent('mgl-layer-error', { layerId: this.layerId, error });
    },

    _emitLayerExists() {
      this._emitMapEvent('mgl-layer-exists', { layerId: this.layerId });
    },

    _emitLayerAdded() {
      this._emitMapEvent('mgl-layer-added', { layerId: this.layerId });
    },

    _emitLayerRemoved() {
      this._emitMapEvent('mgl-layer-removed', { layerId: this.layerId });
    },

    _emitLayerMoved(beforeId) {
      this._emitMapEvent('mgl-layer-moved', { layerId: this.layerId, beforeId: beforeId });
    },

    move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId);
      this._emitLayerMoved(beforeId);
    }
  }
}
