import React from 'react'
import PropTypes from 'prop-types'
import Block from './Block'

const Subscriptions = ({ industry, plan }) => (
  <div className="subscriptions">
    <p className="subscriptions__title">you are subscribed to</p>
    <div className="subscriptions__containers">
      <Block title={plan.label} subtitle={plan.planId} details="See details" url="/"/>
      {Object.keys(industry).map(industryKey => <Block bg={industry[industryKey].image} key={industry[industryKey].key} details={industry[industryKey].label} />)}
    </div>
  </div>
)

Subscriptions.propTypes = {
  industry: PropTypes.object,
  plan: PropTypes.object.isRequired
}

export default Subscriptions;
