import React from 'react';
import "./Sidebar.scss";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import EventIcon from '@mui/icons-material/Event';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ManuLink from '../ManuLink/ManuLink';
import Friends from '../Friends/Friends';
import { Users } from '../../data';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebarWrapper">
        <ManuLink Icon={<RssFeedIcon />} text="Feed" />
        <ManuLink Icon={<ChatIcon />} text="Chats" />
        <ManuLink Icon={<VideocamIcon />} text="Videos" />
        <ManuLink Icon={<Diversity3Icon />} text="Friend" />
        <ManuLink Icon={<BookmarkIcon />} text="Bookmarks" />
        <ManuLink Icon={<LocalGroceryStoreIcon />} text="mMarketplace" />
        <ManuLink Icon={<EventIcon />} text="Events" />
        <ManuLink Icon={<DarkModeIcon />} text="Theme" />
        <ManuLink Icon={<ExitToAppIcon />}
          text="Logout" />     

         <button className="sidebarbutton">Show More</button>
         <hr className="sidebarHr" /> 

         <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <Friends  key={u.id}user={u}/>
          ))}
         </ul>
      </div>
    </div>
  )
}

export default Sidebar