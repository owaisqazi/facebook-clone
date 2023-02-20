import React from 'react';
import Navber from '../../componets/Navbar/Navber';
import Sidebar from '../../componets/Sidebar/Sidebar';
import "./Home.scss"
import Rightbar from '../../componets/Rightbar/Rightbar';
import Feed from '../../componets/Feed/Feed';



const   Home = () => {
  return (
    <>
    <div className='home'>
    <Navber />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
       <Rightbar />
    </div>
    </div>
    </>
  )
}

export default Home