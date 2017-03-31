export default (vueElement, map, events) => {
  for (let event of events) {
    map.on(event, (ev) => {
      vueElement.$emit(`mbx-${event}`, ev);
    });
  }
};
