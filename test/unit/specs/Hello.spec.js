import Vue from 'vue'
import GlMap from '@/components/GlMap'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(GlMap)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('canvas'))
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  })
})
