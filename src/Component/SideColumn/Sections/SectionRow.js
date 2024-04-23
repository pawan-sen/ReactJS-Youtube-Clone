import React from 'react'

function SectionRow(props) {
  return (
    <div className='side-el'>
        <props.icon className='side-icons' />
        <p className='icon-text'>{props.text}</p>
    </div>
  )
}

export default SectionRow
