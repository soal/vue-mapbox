import mixin from "./layerMixin";
import layerEvents from "../../lib/layerEvents";

export default {
  name: "ImageLayer",
  mixins: [mixin],

  watch: {
    "source.coordinates": function(val) {
      if (this.initial) return;
      this.mapSource.setCoordinates(val);
    },
    "source.url": function(val) {
      if (this.initial) return;
      this.mapSource.updateImage({ url: val, coordinates: this.coordinates });
    }
  },

  methods: {
    $_deferredMount(payload) {
      const source = {
        type: "image",
        ...this.source
      };

      this.map = payload.map;
      this.map.on("dataloading", this.$_watchSourceLoading);
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
      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
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
        type: "raster",
        ...this.layer
      };

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
};
