import React from 'react'
import "./Login.scss"

const Login = () => {
  return (
    <>
    
    
    <div className='login'>
      
      <div className='loginWrapper'>
      <div className='loginLeft'>
      <h3 className='loginLogo'>facebook</h3>
      <span className='loginDasc'>Facebook helps you connect and share with the people in your life.</span>
      </div>
      <div className="loginRight">
                <div className="loginBox">
                <div className="bottom">
                    <form className="bottomBox">

                         <input type="Email" placeholder='Email address phone number' id='email' className='loginInput'
                        required/>

                         <input type="password" placeholder='password' id='password' className='loginInput'
                        required/>

                        <button type='submit' className='loginbtn'>log in</button>
                       <a className='forgit' href="Forgotten password?">Forgotten password?</a>
                       <hr id='hr'/>
                        <button className='loginRegisterbtn'>Create new Account</button>
                    </form>
                </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Login