import React from 'react'
import { MdHome, MdOutlineSubscriptions, MdSlideshow } from 'react-icons/md'
import SectionRow from './SectionRow'
import "./Sections.css"

function MainSide() {
  return (
    <div className='Section'>
        <SectionRow icon={MdHome} text='Home' />
        <SectionRow icon={MdSlideshow} text='Shorts' />
        <SectionRow icon={MdOutlineSubscriptions} text='Subsciptions' />
        <hr/>
    </div>
  )
}

export default MainSide
