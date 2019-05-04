import layerEvents from "../../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "VectorLayer",
  mixins: [mixin],

  computed: {
    getSourceFeatures() {
      return filter => {
        if (this.map) {
          return this.map.querySourceFeatures(this.sourceId, {
            sourceLayer: this.layer["source-layer"],
            filter
          });
        }
        return null;
      };
    },

    getRenderedFeatures() {
      return (geometry, filter) => {
        if (this.map) {
          return this.map.queryRenderedFeatures(geometry, {
            layers: [this.layerId],
            filter
          });
        }
        return null;
      };
    }
  },

  watch: {
    filter(filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, filter);
    }
  },

  created() {
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      let source = {
        type: "vector",
        ...this.source
      };

      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }
      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off("dataloading", this.$_watchSourceLoading);
      this.initial = false;
    },

    $_addLayer() {
      let existed = this.map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent("layer-exists", { layerId: this.layerId });
          return existed;
        }
      }
      let layer = {
        id: this.layerId,
        source: this.sourceId,
        ...this.layer
      };

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    },

    setFeatureState(featureId, state) {
      if (this.map) {
        const params = {
          id: featureId,
          source: this.sourceId,
          "source-layer": this.layer["source-layer"]
        };
        return this.map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      if (this.map) {
        const params = {
          id: featureId,
          source: this.source,
          "source-layer": this.layer["source-layer"]
        };
        return this.map.getFeatureState(params);
      }
    }
  }
};
