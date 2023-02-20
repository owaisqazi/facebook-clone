import React from 'react';
import "./Feed.scss";
import Store from "../Store/Store";
import Share from '../share/Share';
import Post from '../Post/Post';
import { Posts } from '../../data';

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Store />
        <Share />
        {Posts.map((p)=>(
          <Post  key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feed;