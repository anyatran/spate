import React from 'react'
import { mount } from 'enzyme'
import App from '../js/components/App'

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.header').length).toEqual(1)
    expect(wrapper.find('.footer').length).toEqual(1)
  })
})
