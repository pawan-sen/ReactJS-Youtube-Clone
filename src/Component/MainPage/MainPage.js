import React from 'react'
import HiddenSideCol from '../SideColumn/Sections/HiddenSideCol'
import SideColumn from '../SideColumn/SideColumn'
import ContentPage from './ContentPage'
import './MainPage.css'

function MainPage({menuClicked}) {

  return (
    <div className="main-page">
      {menuClicked ? <HiddenSideCol /> : <SideColumn className='side-column'/>}
      <ContentPage className='Content-Page' menuClicked={menuClicked} />
    </div>
  )
}

export default MainPage
