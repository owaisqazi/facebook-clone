import React from 'react';
import "./Storycard.scss";

const Storycard = ({ user }) => {
    return (
        <div className='Storycard'>
            <div className="overlay"></div>
            <img src={user.profilePicture} alt="" className='storyprofile' />

      <img src={user.profilePicture} alt="" className='storybg' />

      <span className='text'>{user.username}</span>
     
        </div>
    );
};

export default Storycard