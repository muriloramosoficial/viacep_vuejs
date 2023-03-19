import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeViewVue from '@/views/HomeView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeViewVue, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
