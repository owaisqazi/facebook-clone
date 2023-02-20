import React from 'react';
import  "./EditProfile.scss"
import Navber from '../../componets/Navbar/Navber';
import Sidebar from '../../componets/Sidebar/Sidebar';

const EditProfile = () => {
    return (
        <div className='editProfile'>
            <Navber />
            <div className="editProfileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src="/assets/profileCover/profilecover.jpg" alt=""
                                className='profileCoverImg'/>

                            <img src="/assets/person/user.jpg" alt="" className='profileUserImg' />

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfotName">Amber Logan</h4>
                            <span className='profileInfoDesc'>Hi Friend!</span>
                        </div>
                    </div>
                    <div className="editprofileRightbarBottum">
                        <div className="top"><h1>Edit User Profile</h1></div>
                        <div className="bottom">
                            <img src="./assets/profileCover/DefaultProfile.jpg" alt="" className='profileImage' />
                            <div className="right">
                                <form>
                                    <div className="formInput">
                                        {/* <label htmlFor="file">
                                    Image:
                                    <DriveFolderUploadOutlined className='icon' />
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </label> */}
                                    </div>
                                    <div className="formInput">
                                        <label>Name</label>
                                        <input type="text" placeholder='Jane Doe' />
                                    </div>
                                    <div className="formInput">
                                        <label>UserName</label>
                                        <input type="UserName" placeholder='Jane Doe' />
                                    </div>
                                    <div className="formInput">
                                        <label>Email</label>
                                        <input type="email" placeholder='jane_doe@gmail.com' />
                                    </div>
                                    <div className="formInput">
                                        <label>Phone</label>
                                        <input type="text" placeholder='+92316-2683-165' />
                                    </div>
                                    <div className="formInput">
                                        <label>Address</label>
                                        <input type="text" placeholder='Melwood str.71 Liverpool' />
                                    </div>
                                    <div className="formInput">
                                        <label>Country</label>
                                        <input type="text" placeholder='United Kingdom' />
                                    </div>
                                    <button type='submit' className='updateButton'>Update Profile</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile