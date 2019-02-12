import layerEvents from "../../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "VideoLayer",
  mixins: [mixin],

  computed: {
    video() {
      return this.map.getSource(this.sourceId).getVideo();
    }
  },

  created() {
    if (this.source && this.source.coordinates) {
      this.$watch("source.coordinates", function(next) {
        if (this.initial) return;
        this.mapSource.setCoordinates(next);
      });
    }
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const source = {
        type: "video",
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
        type: "background",
        ...this.layer
      };

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
};
