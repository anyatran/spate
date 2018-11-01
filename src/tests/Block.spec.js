import React from 'react'
import { mount } from 'enzyme'
import Block from '../js/components/Block'

describe('<Block />', () => {
  it('should render Block', () => {
    const wrapper = mount(<Block title="block title" subtitle="block subtitle"/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Block title', () => {
    const wrapper = mount(<Block title="block title"/>)
    expect(wrapper.find('.block__title').text()).toEqual('block title')
    expect(wrapper.find('.block__subtitle').length).toEqual(0)
    expect(wrapper.find('.block__details').length).toEqual(0)
  })

  it('should render Block subtitle', () => {
    const wrapper = mount(<Block subtitle="block subtitle"/>)
    expect(wrapper.find('.block__title').length).toEqual(0)
    expect(wrapper.find('.block__subtitle').text()).toEqual('block subtitle')
    expect(wrapper.find('.block__details').length).toEqual(0)
  })

  it('should render Block details', () => {
    const wrapper = mount(<Block details="block details"/>)
    expect(wrapper.find('.block__title').length).toEqual(0)
    expect(wrapper.find('.block__details').text()).toEqual('block details')
    expect(wrapper.find('.block__subtitle').length).toEqual(0)
  })

  it('should render Block link', () => {
    const wrapper = mount(<Block details="block details" url="some/url"/>)
    expect(wrapper.find('a').length).toEqual(1)
  })
})
