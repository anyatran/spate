import React from 'react'
import { mount } from 'enzyme'
import Subscriptions from '../js/components/Subscriptions'

describe('<Subscriptions />', () => {
  it('should render Subscriptions', () => {
    const wrapper = mount(<Subscriptions industry={{}} plan={{}}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render blocks', () => {
    const plan = {
      lable: 'plan label',
      planId: '123'
    }
    const industry = {
      music: {
        image: 'url',
        key: 'music'
      },
      photography: {
        image: 'url',
        key: 'photography'
      }
    }
    const wrapper = mount(<Subscriptions plan={plan} industry={industry}/>)
    expect(wrapper.find('.block').length).toEqual(3)
  })
})
