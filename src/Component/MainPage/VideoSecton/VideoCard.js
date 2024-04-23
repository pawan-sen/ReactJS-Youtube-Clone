import React from 'react'
import { useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import ReactPlayer from 'react-player'
import './VideoCard.css'

export default function VideoCard({props,menuClicked}) {

  const { id,url, thumbnail, videoName, creator, avatar, views, daysUploaded, verified} = props

  const [play, setPlay] = useState(false);

  const getVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match && match[1];
  };

  const videoId = getVideoId(url);

  return (
    <div className='videoCard'>
      {/* <img className='video' src="https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A" alt='video' /> */}
      <div onMouseEnter={() => {setPlay(true)}} onMouseLeave={() => {setPlay(false)}}>
          {
            play? 
            <ReactPlayer className="player" playing={true}
            width={menuClicked?"20rem" :"24rem"} height={menuClicked?"12rem" :"16rem"}
            controls={false} muted={true}
            config={{ file: { forceHLS: true } }}
            url={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            onReady={() => setPlay(true)}
            />
            // <iframe 
            //   className='video'
            //   src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            //   frameBorder="0"
            //   />
            :
            <img className='video'
            style={{width: (menuClicked?"20rem" : "24rem"), height:(menuClicked?"12rem":"16rem"), cursor: "pointer"}}
            src={thumbnail} alt='video' />
          }
          
        </div>
      <div className='videoCard-detail'>
        <img className='avatar' src={avatar} />
        
        <div className='videoCard-data'>
          <h4>{videoName}</h4>
          <div className='creator'>
            <p>{creator}</p>
            <MdCheckCircle className='verified' visibility={verified? "visible":"hidden"} />
          </div>
          <p className='videoCard-history'>{views} views &bull; {daysUploaded} Ago</p>
        </div>
      </div>

    </div>
  )
}
