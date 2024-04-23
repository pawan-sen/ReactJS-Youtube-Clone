import React from 'react'
import {useState} from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

import CodeBullet from '../../../Images/CodeBullet.jpg'

function Subscriptions() {

    const [channels, setchannels] = useState([
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet2",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet3",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet4",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet2",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet3",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet4",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet2",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet3",
            link: "https://www.youtube.com/@CodeBullet"
        },
        {
            id: uuid(),
            profilePic: CodeBullet,
            name: "Code Bullet4",
            link: "https://www.youtube.com/@CodeBullet"
        },
    ]);

    const [expanded, setExpanded] = useState(false);

    let lim = !expanded?7:channels.length;

    function expandHandler(expanded) {
        setExpanded(!expanded);
    }

    return (
        <div className='Section'>
            <div>
                <h4 className='icon-text'>Subscriptions</h4>
            </div>
            {
                channels.slice(0,lim).map((channel) => <div key={channel.id} className='side-el' onClick={()=> window.open(channel.link,'_Blank')}>
                                            <img className='channel-pic' src={channel.profilePic} alt={channel.name}/>
                                            <p className='icon-text'>{channel.name}</p>
                                        </div>)
            }
            {
                
                
                channels.length>7 && (!expanded? <div className='side-el' onClick={() => expandHandler(expanded)}>
                            <MdArrowDropDown className='side-icons' />
                            <p className='icon-text'>Show {channels.length - lim} more</p>
                        </div>:
                        <div className='side-el' onClick={() => expandHandler(expanded)}>
                            <MdArrowDropUp className='side-icons' />
                            <p className='icon-text'>Show Less</p>
                        </div>)
            }
            <hr/>
        </div>
    )
}

export default Subscriptions
