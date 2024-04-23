import React from 'react'
import { MdMenu, MdMic, MdNotifications, MdPerson, MdSearch, MdVideoCall } from 'react-icons/md'
import './Header.css'
import Youtube_Logo from '../../Images/Youtube_Logo.png'
import { Tooltip } from 'react-tooltip'

function Header( {handleToggleMenu}) {

  return (
    <div className="Header">
        <div className='left-header'>
          <MdMenu className='header-icons menu-icon' size="2em" onClick={()=>handleToggleMenu()} />
          <img src={Youtube_Logo} className='header-icons' alt="logo" />
        </div>
        <div className='mid-header'>
          
        <input type='text' placeholder='Search' />
          <div className='search-icon'>
            <MdSearch className='header-icons' size="2em"/>
          </div>
          <Tooltip anchorSelect=".search-icon" place="bottom" className='tooltip'>
            Search
          </Tooltip>
          <div className='mic-icon'>
            <MdMic className='header-icons mic-icon-class' size="2em"/>
            <Tooltip anchorSelect=".mic-icon-class" place="bottom" className='tooltip'>
              Search with your voice
            </Tooltip>
          </div>
        </div>
        <div className='right-header'>
          <MdVideoCall className='header-icons righ-header-icon' id="video-call" size="2em"/>
          <MdNotifications className='header-icons righ-header-icon' id="notification" size="2em"/>
          <MdPerson  className='header-icons righ-header-icon' size="2em"/>
          <Tooltip  anchorSelect="#video-call" place="bottom" className='tooltip'>
            Create
          </Tooltip>
          <Tooltip anchorSelect="#notification" place="bottom" className='tooltip' >
            Notification
          </Tooltip>
        </div>
    </div>
  )
}

export default Header
