import React from 'react'
import { mount } from 'enzyme'
import Header from '../js/components/Header'

describe('<Header />', () => {
  it('should render Header', () => {
    const wrapper = mount(<Header name="anya"/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.header__navigation').length).toEqual(2)
  })
})
