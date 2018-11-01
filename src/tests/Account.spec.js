import React from 'react'
import { mount } from 'enzyme'
import Account from '../js/components/Account'

describe('<Account />', () => {
  it('should render Account', () => {
    const wrapper = mount(<Account firstName="anya" lastName="tran" role="musician" company="me" createdAt="2018-10-11" onUpdate={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
