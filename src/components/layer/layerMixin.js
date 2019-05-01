// import withRegistration from "../../lib/withRegistration";
import withEvents from "../../lib/withEvents";

const mapboxSourceProps = {
  sourceId: {
    type: String,
    required: true
  },
  source: {
    type: [Object, String],
    default: undefined
  }
};

const mapboxLayerStyleProps = {
  layerId: {
    type: String,
    required: true
  },
  layer: {
    type: Object,
    required: true
  },
  before: {
    type: String,
    default: undefined
  }
};

const componentProps = {
  clearSource: {
    type: Boolean,
    default: true
  },
  replaceSource: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  }
};

export default {
  mixins: [withEvents],
  props: {
    ...mapboxSourceProps,
    ...mapboxLayerStyleProps,
    ...componentProps
  },

  inject: ["mapbox", "map"],

  data() {
    return {
      initial: true
    };
  },

  computed: {
    sourceLoaded() {
      return this.map ? this.map.isSourceLoaded(this.sourceId) : false;
    },
    mapLayer() {
      return this.map ? this.map.getLayer(this.layerId) : null;
    },
    mapSource() {
      return this.map ? this.map.getSource(this.sourceId) : null;
    }
  },

  created() {
    if (this.layer.minzoom) {
      this.$watch("layer.minzoom", function(next) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, next, this.layer.maxzoom);
      });
    }

    if (this.layer.maxzoom) {
      this.$watch("layer.maxzoom", function(next) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, this.layer.minzoom, next);
      });
    }

    if (this.layer.paint) {
      this.$watch(
        "layer.paint",
        function(next) {
          if (this.initial) return;
          if (next) {
            for (let prop of Object.keys(next)) {
              this.map.setPaintProperty(this.layerId, prop, next[prop]);
            }
          }
        },
        { deep: true }
      );
    }

    if (this.layer.layout) {
      this.$watch(
        "layer.layout",
        function(next) {
          if (this.initial) return;
          if (next) {
            for (let prop of Object.keys(next)) {
              this.map.setLayoutProperty(this.layerId, prop, next[prop]);
            }
          }
        },
        { deep: true }
      );
    }

    if (this.layer.filter) {
      this.$watch(
        "layer.filter",
        function(next) {
          if (this.initial) return;
          this.map.setFilter(this.layerId, next);
        },
        { deep: true }
      );
    }
  },

  beforeDestroy() {
    if (this.map && this.map.loaded()) {
      try {
        this.map.removeLayer(this.layerId);
      } catch (err) {
        this.$_emitEvent("layer-does-not-exist", {
          layerId: this.sourceId,
          error: err
        });
      }
      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId);
        } catch (err) {
          this.$_emitEvent("source-does-not-exist", {
            sourceId: this.sourceId,
            error: err
          });
        }
      }
    }
  },

  methods: {
    $_emitLayerMapEvent(event) {
      return this.$_emitMapEvent(event, { layerId: this.layerId });
    },

    $_bindLayerEvents(events) {
      Object.keys(this.$listeners).forEach(eventName => {
        if (events.includes(eventName)) {
          this.map.on(eventName, this.layerId, this.$_emitLayerMapEvent);
        }
      });
    },

    $_unbindEvents(events) {
      if (this.map) {
        events.forEach(eventName => {
          this.map.off(eventName, this.layerId, this.$_emitLayerMapEvent);
        });
      }
    },

    $_watchSourceLoading(data) {
      if (data.dataType === "source" && data.sourceId === this.sourceId) {
        this.$_emitEvent("layer-source-loading", { sourceId: this.sourceId });
        this.map.off("dataloading", this.$_watchSourceLoading);
      }
    },

    move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId);
      this.$_emitEvent("layer-moved", {
        layerId: this.layerId,
        beforeId: beforeId
      });
    },

    remove() {
      this.map.removeLayer(this.layerId);
      this.map.removeSource(this.sourceId);
      this.$_emitEvent("layer-removed", { layerId: this.layerId });
      this.$destroy();
    }
  },

  render() {}
};
