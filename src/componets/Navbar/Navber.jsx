import React from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navber = () => {
  return (
    <div className='navbarcontainer'>
        <div className="navbarLeft">
            <span className='logo'>FaceBook</span>
        </div>
        <div className="navbarcenter">
            <div className="searchBar">
            <SearchIcon  className='SearchIcon'/>
                <input type="text" placeholder="Search for friends post or video"
                className='searchInput'/>
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarlinks">
               <span className='navbarLink'>Home page</span>
               <span className='navbarLink'>Timeline</span> 
            </div>
            <div className="navbarIcons">
                <div className="navbarIconsItem">
                <PersonIcon />
                <span className="navbarIconBadge">2</span>
                </div>
                <div className="navbarIconsItem">
                <ChatBubbleOutlineIcon />
                <span className="navbarIconBadge">10</span>
                </div>
                <div className="navbarIconsItem">
                <NotificationsNoneIcon />
                <span className="navbarIconBadge">8</span>
                </div>
                <img src="/assets/person/user.jpg" alt="" className='navbarImg' />
            </div>
        </div> 
    </div>
  )
}

export default Navber