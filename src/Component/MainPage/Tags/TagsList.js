import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { v4 } from 'uuid';
import Tags from './Tags'
import './TestTags.css'

function TagsList({menuClicked}) {

    const [tagsList, setTagsList] = useState([
        {
          id: v4(),
          tagName: '\u00A0'+'All'+'\u00A0',
          isActive: true,
        },
        {
          id: v4(),
          tagName: 'Comedy Club',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'News',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Comedy Sketch',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Memes',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Gaming',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Empires',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'APIs',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Industry',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'KnowLedge',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Civilization',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'History',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Algorithms',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Data Structure',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Martial Arts',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Strategries',
          isActive: false,
        },

        {
          id: v4(),
          tagName: 'Recently Uploaded',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Watched',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'Anime',
          isActive: false,
        },
        {
          id: v4(),
          tagName: 'New to You',
          isActive: false,
        },
    ]);

    const [scrollPostion, setScrollPostion] = useState(0);

    const [scrollEnd, setScrollEnd] = useState(false);

    const containerRef = useRef();

    const handleScroll = (dir) => {
      let newScrollPos = 0; 
      if(dir==='l') {
        newScrollPos = scrollPostion + 200;
      } else {
        newScrollPos = scrollPostion - 200;
      }

      // console.log("newScrollPos = " + newScrollPos);
      // console.log("containerRef.current.offsetWidth = " + containerRef.current.offsetWidth);
      // console.log("containerRef.current.scrollWidth = " + containerRef.current.scrollWidth);
      
      if(newScrollPos<0) {
        newScrollPos=0;
      }

      if(newScrollPos>=containerRef.current.scrollWidth-containerRef.current.offsetWidth) {
        newScrollPos = containerRef.current.scrollWidth-containerRef.current.offsetWidth;
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }

        setScrollPostion(newScrollPos);

        containerRef.current.scrollLeft = newScrollPos;
    };

    function handleTagActive(tagId) {
      const updatedTagsList = tagsList.map(tag => ({
        ...tag,
        isActive: tag.id === tagId
      }));
      setTagsList(updatedTagsList);
    }

  return (
    <div className='outer-tagList' style={{width: (menuClicked?'94vw': '90vw')}}>
        
        { scrollEnd? "" : <MdChevronLeft onClick={() => {handleScroll("l")}} className='arrow-icon'/> }
        {/* <MdChevronLeft onClick={() => {handleScroll("l")}} className='arrow-icon'/> */}
        <div className='tagList' >
            <div className='inner-tagList' ref={containerRef} style={{overflowX: "hidden",scrollBehavior: "smooth"}}>
                {
                tagsList.map((tag) => <Tags key={tag.id} props={tag} handleTagActive={handleTagActive} />)
                }
            </div>
        </div>
        { scrollPostion===0? "" : <MdChevronRight onClick={() => {handleScroll('r')}} className='arrow-icon' /> }
    </div>
  )
}

export default TagsList
