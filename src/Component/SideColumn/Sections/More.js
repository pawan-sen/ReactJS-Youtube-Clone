import React from 'react'
import { MdGames, MdMovie, MdYoutubeSearchedFor } from 'react-icons/md'
import SectionRow from './SectionRow'

function More() {
  return (
    <div className='Section'>
        <div>
            <h4 className='icon-text'>More From Youtube</h4>
        </div>
        <SectionRow icon={MdYoutubeSearchedFor} text="YouTube Premium"/>
        <SectionRow icon={MdMovie} text="Movie"/>
        <SectionRow icon={MdGames} text="Games"/>
        <hr/>
    </div>
  )
}

export default More
