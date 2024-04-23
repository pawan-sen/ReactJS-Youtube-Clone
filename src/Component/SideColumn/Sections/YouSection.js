import React from 'react'
import { MdAccessTime, MdHistory, MdOutlinePerson, MdPlayCircleOutline, MdPlaylistPlay, MdThumbUpOffAlt } from 'react-icons/md'
import SectionRow from './SectionRow'

function YouSection() {
  return (
    <div className='Section'>
        <div className='side-el'>
            <p className='icon-text'><strong>You {'\u00A0'} {'>'} </strong></p>
        </div>
        <SectionRow icon={MdOutlinePerson} text="Your Channel" />
        <SectionRow icon={MdHistory} text="History" />
        <SectionRow icon={MdPlaylistPlay} text="Playlists" />
        <SectionRow icon={MdPlayCircleOutline} text="Your Videos" />
        <SectionRow icon={MdAccessTime} text="Watch Later" />
        <SectionRow icon={MdThumbUpOffAlt} text="Liked Videos" />
        <hr/>
        {/* <div className='side-el'>
            <MdOutlinePerson className='side-icons' />
            <p className='icon-text'>Your Channel</p>
        </div>
        <div className='side-el'>
            <MdHistory className='side-icons' />
            <p className='icon-text'>History</p>
        </div>
        <div className='side-el'>
            <MdPlaylistPlay className='side-icons' />
            <p className='icon-text'>Playlists</p>
        </div>
        <div className='side-el'>
            <MdPlayCircleOutline className='side-icons' />
            <p className='icon-text'>Your Videos</p>
        </div>
        <div className='side-el'>
            <MdAccessTime className='side-icons' />
            <p className='icon-text'>Watch Later</p>
        </div>
        <div className='side-el'>
            <MdThumbUpOffAlt className='side-icons' />
            <p className='icon-text'>Liked Videos</p>
        </div> */}
    </div>
  )
}

export default YouSection
