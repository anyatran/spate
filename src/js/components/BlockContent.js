import React from 'react'
import PropTypes from 'prop-types'

const BlockContent = ({ details, title, subtitle }) => (
  <div>
    {title && <p className="block__title">{title}</p>}
    {subtitle && <p className="block__subtitle">{subtitle}</p>}
    {details && <p className="block__details">{details}</p>}
  </div>
)

BlockContent.propTypes = {
  details: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default BlockContent
