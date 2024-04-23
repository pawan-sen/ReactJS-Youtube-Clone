import React from 'react'
import { MdHome, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdSlideshow } from 'react-icons/md'
import '../SideColumn.css'

function HiddenSideCol() {
  return (
    <div className='hiddenSideCol'>
      <div className='hiddenSideCol-row'>
        <MdHome className='hiddenSideCol-Icon' />
        <p className='hiddenSideCol-Icon-label'>Home &ensp;</p>
      </div>
      <div className='hiddenSideCol-row'>
        <MdSlideshow className='hiddenSideCol-Icon' />
        <p className='hiddenSideCol-Icon-label'>Shorts &ensp;</p>
      </div>
      <div className='hiddenSideCol-row'>
        <MdOutlineSubscriptions className='hiddenSideCol-Icon' />
        <p className='hiddenSideCol-Icon-label hiddenSideCol-subscription'>Subscriptions</p>
      </div>
      <div className='hiddenSideCol-row'>
        <MdOutlineVideoLibrary className='hiddenSideCol-Icon' />
        <p className='hiddenSideCol-Icon-label'>You &ensp;</p>
      </div>
    </div>
  )
}

export default HiddenSideCol
