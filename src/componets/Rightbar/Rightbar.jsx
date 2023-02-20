import React from 'react';
import ProfileRightBar from '../ProfileRightBar/ProfileRightBar';
import "../Rightbar/Rightbar.scss";
import RightbsrHome from '../RightbarHome/RightbsrHome';

const Ridebar = ({Profile}) => {
  return (
    <div className='Ridebar'>
      <div className="RightbarWrpper">
      { Profile ? <ProfileRightBar /> : <RightbsrHome />}
      </div>
    </div>
  )
}

export default Ridebar