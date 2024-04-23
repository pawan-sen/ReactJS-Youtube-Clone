import React from 'react'
import './Tags.css'

function Tags({props,handleTagActive}) {

  const { id,tagName, isActive } = props;

  return (
    <div className={'tag' + (isActive?" activeTag":"") } onClick={() => handleTagActive(id)}>
      {tagName}
    </div>
  )
}

export default Tags
