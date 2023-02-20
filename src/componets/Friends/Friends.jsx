import React from 'react';
import "./friends.scss"

const Friends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className='sidebarFriendimg' />
        <span className="sidebarFriendname">{user.username}</span>
      </li>
    </div>
  )
}

export default Friends