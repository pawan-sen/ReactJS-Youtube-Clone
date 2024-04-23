import React from 'react'
import { MdFeedback, MdHelpOutline, MdReportProblem, MdSettings } from 'react-icons/md'
import SectionRow from './SectionRow'

function YouTubeSettings() {
  return (
    <div className='Section'>
      <SectionRow icon={MdSettings} text="Settings"/>
      <SectionRow icon={MdReportProblem} text="Report History"/>
      <SectionRow icon={MdHelpOutline} text="Help"/>
      <SectionRow icon={MdFeedback} text="Send FeedBack"/>
      <hr/>
    </div>
  )
}

export default YouTubeSettings

