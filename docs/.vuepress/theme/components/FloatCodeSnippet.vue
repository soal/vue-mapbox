<template>
  <div class="float-code-snippet" :style="position" ref="root">
    <div class="snippet-wrapper">
      <div class="comp-info">
        <a target="_blank" :href="link">{{ name }}</a>
      </div>
      <!-- <CodeBlock :title="name" :active="true"> -->
      <div class="code">
        <pre>{{ code }}</pre>
      </div>
      <!-- </CodeBlock> -->
    </div>
    <div
      class="snippet-arrow"
      :style="{
        top: arrowPos.top + 'px',
        left: arrowPos.left + 'px',
        height: arrowPos.height + 'px',
        width: arrowPos.width + 'px',
      }"
    >
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        :width="Math.abs(arrowPos.width) + 'px'"
        :height="Math.abs(arrowPos.height) + 'px'"
        :viewBox="`0 0 ${Math.abs(arrowPos.width) + 10} ${
          Math.abs(arrowPos.height) + 10
        }`"
        version="1.1"
        :style="{ transform: arrowTransform }"
      >
        <path
          class="arrow-path"
          :d="`
          M ${arrowPos.width - 10},10
          C ${arrowPos.width + 10},${arrowPos.height * 1.1}
            ${arrowPos.width / 2},${arrowPos.height - 10}
            15,${arrowPos.height - 10}
          `"
        />
        <path
          class="arrow-path arrow-corner"
          :d="`m 15,${arrowPos.height - 10} 10,-10`"
        />
        <path
          class="arrow-path arrow-corner"
          :d="`m 15,${arrowPos.height - 10} 10,10`"
        />
      </svg>
    </div>
    <!--     <div class="arrow">
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        version="1.1"
      >
          <path
            style="
              fill: none;
              fill-rule: evenodd;
              stroke: #000000;
              stroke-width: 3px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 0,0 0,98.506857"
            id="path2905"
          /> -->
    <!-- d="M 99.546794,0.41246457 1.5095429,98.506857" -->
    <!--           <path
            style="
              fill: none;
              fill-rule: evenodd;
              stroke: #000000;
              stroke-width: 1.0015748;
              stroke-linecap: round;
              stroke-linejoin: miter;
              stroke-opacity: 1;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
            "
            d="M 1.5095429,98.506857 H 11.520264"
            id="path2907"
          />
          <path
            style="
              fill: none;
              fill-rule: evenodd;
              stroke: #000000;
              stroke-width: 1.00157;
              stroke-linecap: round;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="M 1.5095429,98.506856 V 88.496136"
            id="path2907-7"
          /> -->
    <!-- </svg> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "FloatCodeSnippet",

  props: {
    name: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },

    position: {
      type: Object,
      default: () => ({ top: "0px", left: "0px", right: null, bottom: null }),
    },

    targetPoint: {
      type: Object,
      default: () => ({ y: 0, x: 0 }),
    },
  },

  data() {
    return {
      arrowPos: {
        top: 0,
        left: 0,
        height: 0,
        width: 20,
      },
      arrowStartOffset: 0,
      arrowTransform: "scale(1, 1)",
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.updateArrowPos();
    });
  },

  methods: {
    updateArrowPos() {
      if (this.$refs.root) {
        const rootRect = this.$refs.root.getBoundingClientRect();
        this.arrowPos.top = this.$refs.root.offsetHeight;

        this.arrowPos.height = Math.abs(
          this.targetPoint.y - this.$refs.root.offsetHeight
        );

        if (this.$refs.root.offsetLeft < 0) {
          this.arrowPos.left = this.$refs.root.offsetWidth / 2;
          this.arrowPos.width = Math.abs(
            this.$refs.root.offsetLeft + this.arrowPos.left - this.targetPoint.x
          );
          this.arrowTransform = 'scale(-1, 1)'
        } else {
          this.arrowPos.left = this.targetPoint.x - this.$refs.root.offsetLeft;
          this.arrowPos.width =
            this.$refs.root.offsetWidth / 2 - this.arrowPos.left;
        }
      }
    },
  },
};
</script>

<style lang="stylus">
$borderRadius = 6px

.float-code-snippet
  // border-radius 6px
  font-family Fira Code, sans-serif
  // overflow hidden
  position absolute
  z-index 2

.snippet-wrapper
  box-shadow: 0px 1px 6px 1px #555;
  border-radius $borderRadius
  overflow hidden

.comp-info
  font-family Quicksand Medium, sans-serif
  letter-spacing 1px
  font-weight bold
  font-size 1.2rem
  background-color $accentColor
  color: #fff
  padding 0.5rem
  text-align center

  a
    color: #fff
    text-decoration underline
    text-decoration-style dashed

    &:hover
      text-decoration-style solid

.code
  color: white
  background-color #282c34 !important
  font-size 0.8rem
  padding 0.5rem

  pre
    background-color none !important
    font-family "Fira Code", sans-serif
    text-align left
    margin 0

.snippet-arrow
  // background-color: red
  position absolute
  pointer-events none
  z-index 10

  .arrow-corner
    stroke-linecap: round

  .arrow-path
    fill: none
    fill-rule: evenodd
    // stroke: $accentColor
    stroke: #333
    stroke-width: 3px
    // stroke-linecap: round
    stroke-linejoin: miter
    stroke-opacity: 1
</style>
