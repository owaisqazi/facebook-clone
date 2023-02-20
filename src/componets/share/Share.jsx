import { EmojiEmotions, PermMedia, VideoCameraFront } from '@mui/icons-material';
import React from 'react';
import "./Share.scss";

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">

                <div className="shareTop">

                <img src="/assets/person/user.jpg" alt="" className='shareProfileImg' />

                <input type="text" placeholder="what's on your mind Amber /"
                className='shareInput'/>
                </div>
                <hr className="shareHr" />

                <div className="shareBottun">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <VideoCameraFront className='shareIcon' />
                            <span className="shareOptinText">Live Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className='shareIcon' style={{color: "#d007b0"}} />
                            <span className="shareOptinText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className='ShareeIcons' style={{color: "yellow"}} />
                            <span className="shareOptinText">Feelings/Activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share