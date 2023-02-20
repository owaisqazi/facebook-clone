import React from 'react'
import { Usersonline } from '../../data'
import Online from '../Online/Online'
import "./RightbarHome.scss"

const RightbsrHome = () => {
    return (
        <div className='RightbsrHome'>
            <div className="birthdayContainer">
                <img src="./assets/birthdaygifts/gift.png" alt="" className='birthdayImg' />
                <span className="birthdayText">
                    <b>Sarah Done</b> and <b>other friends</b> have a birthday today
                </span>
            </div>
            <img src="./assets/ads/adv.jpg" alt="" className='RightbarAdvert' />
            <span className="birthdayTitle">Online Friends
            </span>
            <ul className="RightbarFriendList">
                {Usersonline.map((u) => (
                    <Online key={u.id} Usersonline={u} />
                ))}
            </ul>
        </div>
    )
}

export default RightbsrHome