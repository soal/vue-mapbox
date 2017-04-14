export default (vueElement, map, events) => {
  for (let event of events) {
    map.on(event, ev => vueElement.$emit(`mgl-${event}`, ev));
  }
};
