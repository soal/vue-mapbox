import { shallow } from 'vue-test-utils'
import GlMap from '../components/GlMap.vue'

describe('GlMap root component with map', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(GlMap, {
      data: {
        initial: true,
        baseMap: true,
        mapLoaded: false,
        map: undefined
      },
      props: {
        mapStyle: ''
      }
    })
  })

  it('renders without crushing', () => {
    expect(wrapper.vm.baseMap).toEqual(true)
  })
})
