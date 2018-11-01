import React from 'react'
import { mount } from 'enzyme'
import Button from '../js/components/Button'

describe('<Button />', () => {
  it('should render Button', () => {
    const wrapper = mount(<Button text="hello"/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props().text).toEqual("hello")
  })
})
