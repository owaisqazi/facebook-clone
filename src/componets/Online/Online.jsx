import React from 'react';
import "./Online.scss"


const Online = ({ Usersonline }) => {
  return (
    <div className='Online'>
      <li className="RightbarFirend">
        <div className="RightbarProfileImgcontainer">
          <img src={Usersonline.profilePicture} alt="" className="RightbarProfileImg" />
          <span className="RightbarOnline"></span>
        </div>
        <span className="RightbarUsername">{Usersonline.username}</span>
      </li>
    </div>
  )
}

export default Online