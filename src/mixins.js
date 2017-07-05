import bus from './messageBus';


// FIXME: Use this mixin in controls!
export const UIMIxin = {
  methods: {
    deferredMount(map, eventName, eventPayload=this.mapElement) {
      this.map = map;
      map.addControl(this.mapElement);
      this.$emit(eventName, this.eventPayload);
      bus.$emit(eventName, this.eventPayload);
    }
  }
}
