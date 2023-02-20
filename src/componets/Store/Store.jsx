import React from 'react';
import Storycard from "../Storycard/Storycard";
import "./Store.scss";
import {Users} from "../../data"


const store = () => {
  return (
    <div className='stories'>
      <div className="storycard">
      <div className="overlay"></div>
      <img src="./assets/person/user.jpg" alt="" className='storyprofile' />

      <img src="./assets/person/user.jpg" alt="" className='storybg' />

      <img src="./assets/person/upload.png" alt="" className='storyadd' />
      <span className='text'>Amber</span>
      </div>

      {Users.map((u)=>(

      <Storycard key={u.id} user={u} />
      ))}
    </div>
  )
}

export default store