import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from './BlockContent'

const Block = ({ bg, details, subtitle, title, url }) => (
  <div className="block">
    {url &&
      <a href={url} className="block__container block__container--link" style={bg && {backgroundImage: `url(${bg})`}}>
        <BlockContent title={title} subtitle={subtitle} details={details}/>
      </a>
    }
    {!url &&
      <div className="block__container" style={bg && {backgroundImage: `url(${bg})`}}>
        <BlockContent title={title} subtitle={subtitle} details={details}/>
      </div>
    }
  </div>
)

Block.propTypes = {
  bg: PropTypes.string,
  details: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Block
