import React from 'react';
import Feed from '../../componets/Feed/Feed';
import Navber from '../../componets/Navbar/Navber';
import Sidebar from '../../componets/Sidebar/Sidebar';
import Rightbar from '../../componets/Rightbar/Rightbar';
import "./Profile.scss";

const Profile = () => {
    return (
        <div className='profile'>
            <Navber />
            <div className="profileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src="./assets/profileCover/profilecover.jpg" alt=""
                                className='profileCoverImg' />

                            <img src="./assets/person/user.jpg" alt="" className='profileUserImg' />

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfotName">Amber Logan</h4>
                            <span className='profileInfoDesc'>Hi Friend!</span>
                        </div>
                    </div>
                    <div className="profileRightbarBottum">
                        <Feed />
                        <Rightbar Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile