import Vue from 'vue'
import GlMap from '@/components/GlMap'

describe('GlMap.vue', () => {
  it('should mount with correct given id name', () => {
    const containerId = 'map-1'
    const Constructor = Vue.extend(GlMap)
    let vm = new Constructor({
      propsData: {
        mapStyle: 'mapbox://styles/soal/cj0v9r49j00lq2rtact0w0ldv',
        accessToken: 'pk.eyJ1Ijoic29hbCIsImEiOiJjaW1qZndnMmwwMDEzdzBtNHRxcGFrampqIn0.bpwowsJ4GLBdsPnnXuZboA',
        container: containerId
      }
    })
    vm = vm.$mount()
    expect(vm.$el.id).to.equal(containerId)
  })

  it('should mount with correct random id name', () => {
    const Constructor = Vue.extend(GlMap)
    let vm = new Constructor({
      propsData: {
        mapStyle: 'mapbox://styles/soal/cj0v9r49j00lq2rtact0w0ldv',
        accessToken: 'pk.eyJ1Ijoic29hbCIsImEiOiJjaW1qZndnMmwwMDEzdzBtNHRxcGFrampqIn0.bpwowsJ4GLBdsPnnXuZboA'
      }
    })
    vm = vm.$mount()
    const elClass = vm._props.container
    expect(vm.$el.id).to.equal(elClass)
  })

  it('should create canvas element for map', () => {
    const Constructor = Vue.extend(GlMap)
    let vm = new Constructor({
      propsData: {
        mapStyle: 'mapbox://styles/soal/cj0v9r49j00lq2rtact0w0ldv',
        accessToken: 'pk.eyJ1Ijoic29hbCIsImEiOiJjaW1qZndnMmwwMDEzdzBtNHRxcGFrampqIn0.bpwowsJ4GLBdsPnnXuZboA'
      }
    })
    vm = vm.$mount()
    vm.$on('mgl-load', () => {
      expect(vm.$el.querySelector('canvas').to.be.a(HTMLElement))
    })
  })
})
