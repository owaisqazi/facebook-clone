import { DriveFolderUpload } from '@mui/icons-material'
import React from 'react'
import "./Register.scss"

const Register = () => {
  return (
    <div className='Register'>
        <div className='RegisterWrapper'>
          <div className='RegisterLeft'>
           <h3 className='RegisterLogo'>FaceBook</h3>
           
             <span className='RegisterDesc'>
                Connect with friends and the around you on Facebook.
            </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                <div className="top">
                    <img  src="./assets/profileCover/DefaultProfile.jpg" alt="" className='profileImg'/>

                    <div className='formInput'>
                    <label htmlFor="file">
                        Image: <DriveFolderUpload className='icon'/>
                        <input type="file" name='file' id='file' accept='.png,.jpeg,.jpg' style={{display:"none"}} />
                    </label>
                    </div>
                </div>
                <div className="bottom">
                    <form className="bottomBox">
                        <input type="text" placeholder='Username' id='Username' className='registerInput'
                        required/>

                         <input type="Email" placeholder='Email' id='email' className='registerInput'
                        required/>

                         <input type="password" placeholder='password' id='password' className='registerInput'
                        required/>

                         <input type="password" placeholder='Confirm password' id='Confirmpassword' className='registerInput'
                        required/>
                        <button type='submit' className='registerbtn'>Sign Up</button>
                        <button className='loginRegisterbtn'>log into Account</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register