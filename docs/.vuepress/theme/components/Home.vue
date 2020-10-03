<template>
  <div>
  <header>
    <HomeNavbar />
  </header>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div class="hero">
      <h2 class="tagline">
        Combine powers of <a target="_blank" href="https://docs.mapbox.com/mapbox-gl-js" class="tagline-link mapbox">Mapbox</a> Web maps and <a target="_blank" href="https://vuejs.org" class="tagline-link vue">Vue</a>
      </h2>
      <div v-if="actions" class="actions">
        <NavLink class="action-button" :item="actions.guide" />
        <!-- <NavLink class="action-button" :item="{ link: '', text: 'Try online' }" /> -->
      </div>
      <HomeMap class="hero-map" />
    </div>


    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
  </main>
</div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import HomeNavbar from '@theme/components/HomeNavbar.vue'
import HomeMap from '@theme/components/HomeMap.vue'

export default {
  name: "Home",

  components: { NavLink, HomeNavbar, HomeMap },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actions() {
      return {
        guide: {
          link: this.data.guideLink,
          text: this.data.guideText,
        },
        source: {
          link: this.data.sourceLink,
          text: this.data.sourceText,
        },
      };
    },
  },
};
</script>

<style lang="stylus">
$mapboxColor = #4264fb

h1, h2, .logo, .tagline
  font-family Quicksand Medium, sans-serif

.home
  padding 0 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block

  .hero
    text-align center
    // display grid
    // grid-template-columns: 1fr 1fr
    // grid-template-rows auto 100px

    .tagline
      font-size 2.5rem
      color lighten($textColor, 10%)
      border none

      .tagline-link
        &:hover
          text-decoration underline

        &.vue
          color: $accentColor

        &.mapbox
          color: $mapboxColor

    .hero-map
      margin 6rem 0

    // .actions
    //   grid-row 2 / -1
    //   grid-column 1 / -1


    // img
    //   max-width: 100%
    //   max-height 280px
    //   display block
    //   margin 3rem auto 1.5rem

    // h1
    //   font-size 3rem
    //   margin 1.8rem auto

    .actions
      margin-bottom 3rem

    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)

  .features
    // border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between

  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%

    // h2
    //   font-size 1.4rem
    //   font-weight 500
    //   border-bottom none
    //   padding-bottom 0
    //   color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .actions
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
