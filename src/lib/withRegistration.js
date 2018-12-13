// @ts-check
function walkParents(component) {
  if (component.baseMap) {
    return component;
  } else {
    if (component.$parent !== undefined) {
      return walkParents(component.$parent);
    }
  }
}

export default {
  created() {
    this.map = null;
  },
  mounted() {
    this.$_checkMapTree();
    // We wait for "load" event from map component to ensure mapbox is loaded and map created
  },

  methods: {
    $_findBaseMap() {
      const baseMapComponent = walkParents(this.$parent);
      if (baseMapComponent === undefined) {
        throw new Error("Component must have root map");
      }
      return baseMapComponent;
    },
    $_checkMapTree() {
      let mapComponent = this.$_findBaseMap();
      if (mapComponent) {
        if (mapComponent.mapLoaded) {
          this.$_deferredMount({
            component: mapComponent,
            map: mapComponent.map
          });
        } else {
          mapComponent.$on("load", this.$_deferredMount);
        }
      }
    }
  }
};
