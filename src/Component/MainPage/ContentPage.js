import React from 'react'
import { useState } from 'react';
import { v4 } from 'uuid';
import './ContentPage.css'
import TagsList from './Tags/TagsList';
import TestTagList from './Tags/TestTagList';
import VideoCard from './VideoSecton/VideoCard'

function ContentPage({menuClicked}) {

  const [videos, setvideos] = useState([
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: false,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
    {
      id: v4(),
      url: "https://youtu.be/HGOBQPFzWKo?si=EWWvpfYG6_6lO5EC", 
      thumbnail: "https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A", 
      videoName: "Intermediate Python Programming Course", 
      creator: "FreeCodeCamp", 
      avatar: "https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj", 
      views: "1M", 
      daysUploaded: "2 Years", 
      verified: true,
    },
  ]);

  return (
    <div className='ContentPage'>
      <TagsList className="tags" menuClicked={menuClicked} />
      {/* <TestTagList className="tags" menuClicked={menuClicked} /> */}
      <div className='videoList' style={{ gridTemplateColumns: (menuClicked?"repeat(auto-fill,20em)": "repeat(auto-fill,24em)") }}>
        {
          videos.map((video) => <VideoCard key={video.id} props={video} menuClicked={menuClicked} />)
        }
      </div>
      
    </div>
  )
}

export default ContentPage
