import layerEvents from "../../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "GeojsonLayer",
  mixins: [mixin],
  props: {
    source: {
      type: [Object, String]
    }
  },

  computed: {
    getSourceFeatures() {
      return filter => {
        if (this.map) {
          return this.map.querySourceFeatures(this.sourceId, { filter });
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
    source(data) {
      if (this.initial) return;
      this.mapSource.setData(data);
    },
    filter(filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, filter);
    }
  },

  methods: {
    $_deferredMount(payload) {
      this.map = payload.map;
      this.map.on("dataloading", this.$_watchSourceLoading);
      if (this.source) {
        const source = {
          type: "geojson",
          ...this.source
        };
        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          } else {
            this.$_emitEvent("layer-source-error", {
              sourceId: this.sourceId,
              error: err
            });
          }
        }
      }
      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off("dataloading", this.$_watchSourceLoading);
      this.initial = false;
      payload.component.$off("load", this.$_deferredMount);
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
      const layer = {
        id: this.layerId,
        source: this.sourceId,
        ...this.layer
      };
      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    },

    setFeatureState(featureId, state) {
      if (this.map) {
        const params = { id: featureId, source: this.source };
        return this.map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      if (this.map) {
        const params = { id: featureId, source: this.source };
        return this.map.getFeatureState(params);
      }
    }
  }
};
