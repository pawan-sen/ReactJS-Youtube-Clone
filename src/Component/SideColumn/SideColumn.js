import React from 'react'
import MainSide from './Sections/MainSide'
import More from './Sections/More'
import YouTubeSettings from './Sections/YouTubeSettings'
import Subscriptions from './Sections/Subscriptions'
import YouSection from './Sections/YouSection'
import './SideColumn.css'
import TNC from './Sections/TNC'

function SideColumn() {
  return (
    <div className='sideCol'>
      <MainSide />
      <YouSection />
      <Subscriptions />
      <More/>
      <YouTubeSettings />
      <TNC/>
    </div>
  )
}

export default SideColumn
