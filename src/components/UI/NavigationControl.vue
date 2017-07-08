  <template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../messageBus';

  export default {
    name: 'MglNavigationControl',

    props: {
      position: {
        type: String,
        default: 'top-right'
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new M.NavigationControl();
      bus.$once('mgl-load', this._deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      _deferredMount(map) {
        this.map = map;
        this.map.addControl(this.control, this.position);
        this.$emit('mgl-nav-control-added', this.control);
        bus.$emit('mgl-nav-control-added', this.control);
      }
    }
  };
</script>
