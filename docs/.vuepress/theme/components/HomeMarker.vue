<template>
  <div>
    <FloatCodeSnippet
      :code="code"
      link="/guide/markers&popups"
      :targetPoint="targetPoint"
      name="<MglMarker>"
      :position="{ right: '110px', top: '-60px' }"
    />
    <MglMarker :coordinates="marker.coordinates" anchor="bottom">
      <div class="vmap-marker" slot="marker" ref="marker">
        <img :src="$withBase($site.themeConfig.logo)" />
        Bodh Gaya
      </div>
    </MglMarker>
  </div>
</template>

<script>
import { MglMarker } from "../../../../src/main.js";
import FloatCodeSnippet from "@theme/components/FloatCodeSnippet";

const code = `<MglMarker
  :coordinates="[84.991275, 24.695102]"
  anchor="bottom"
>
  <div slot="marker">
    <img src="/marker.svg" />
    Bodh Gaya
  </div>
</MglMarker>
`;
export default {
  name: "HomeMarker",

  components: { MglMarker, FloatCodeSnippet },

  data() {
    return {
      marker: {
        coordinates: [84.991275, 24.695102],
      },
      code,
      targetPoint: { x: 480 + 30, y: 360 + 20 }
    };
  },

  mounted() {
    this.$nextTick(() => {
      if (this.$refs.marker) {
        const width = this.$refs.marker.getBoundingClientRect().width
        this.targetPoint.x += this.$refs.marker.getBoundingClientRect().width / 2
      }
    })
  }
};
</script>

<style lang="stylus">
.vmap-marker
  font-size 1.5rem
  text-align center
  position relative

  img
    display block
    margin 0 auto
    height 5rem
</style>
