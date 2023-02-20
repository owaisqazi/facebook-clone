import React from 'react'
import "./ProfileRightBar.scss";

const ProfileRightBar = () => {
    return (
        <div className='ProfileRightBar'>
            <div className="ProfileRightbarHeading">
                <span className=' spanProfileRightBarTitle'>User Information</span>
                <span className="editButton">Edit Profile</span>
            </div>

            <div className="profileRightbarInfo">
                <div className="profileRightbarInfoItem">
                    <span className="profileRightBarInfoKey">Email:</span>
                    <span className="profileRightBarInfoValue">Amberlogin@gmail.com</span>
                </div>
                <div className="profileRightbarInfoItem">
                    <span className="profileRightBarInfoKey">Phone Number</span>
                    <span className="profileRightBarInfoValue">+92316-2683-165</span>
                </div>
                <div className="profileRightbarInfoItem">
                    <span className="profileRightBarInfoKey">Address:</span>
                    <span className="profileRightBarInfoValue">Melwood Str. 72 Liverpool</span>
                </div>
                <div className="profileRightbarInfoItem">
                    <span className="profileRightBarInfoKey">Country:</span>
                    <span className="profileRightBarInfoValue">United Kingdom</span>
                </div>
                <div className="profileRightbarInfoItem">
                    <span className="profileRightBarInfoKey">Relationship:</span>
                    <span className="ProfileRightBarInfoValue">Single</span>
                </div>
            </div>



            <h4 className='profileRightbarTitle' style={{marginTop:"30px"}}>Close Friends</h4>
            <div className="profileRightbarfollowings">
            <div className="profileRightbarfollowing">
                <img src="./assets/person/friend1.jpg" alt="" className='profileRightbarfollowingImg'/>
                <span className='profileRightbarfollowingName'>Janet</span>
            </div>
            <div className="profileRightbarfollowing">
                <img src="./assets/person/friend2.jpg" alt="" className='profileRightbarfollowingImg'/>
                <span className='profileRightbarfollowingName'>Isabelly</span>
            </div>
            <div className="profileRightbarfollowing">
                <img src="./assets/person/friend3.jpg" alt="" className='profileRightbarfollowingImg'/>
                <span className='profileRightbarfollowingName'>Beverly</span>
            </div>
            <div className="profileRightbarfollowing">
                <img src="./assets/person/friend4.jpg" alt="" className='profileRightbarfollowingImg'/>
                <span className='profileRightbarfollowingName'>Glenna</span>
            </div>
            <div className="profileRightbarfollowing">
                <img src="./assets/person/friend5.jpg" alt="" className='profileRightbarfollowingImg'/>
                <span className='profileRightbarfollowingName'>Alexis</span>
            </div>
            <div className="profileRightbarfollowing">
                <img src="./assets/person/friend6.jpg" alt="" className='profileRightbarfollowingImg'/>
                <span className='profileRightbarfollowingName'>Kate</span>
            </div>
        </div>
        </div>
    )
}

export default ProfileRightBar