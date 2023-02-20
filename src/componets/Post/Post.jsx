import { ChatBubbleOutline, Favorite, MoreVert, ShareOutlined, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Users } from '../../data';
import "./Post.scss"

const Post = ({ post }) => {
    return (
        <div className='post2'>
            <div className="postWrpper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                            alt="" className='postProfileImg' />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postData">{post.data}</span>
                    </div>
                    <div className="postTopRight">
                        <IconButton>
                            <MoreVert className='postVertBottun' />
                        </IconButton>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postsText">{post.body}</span>
                    <img src={post.photo} alt="" className='postImg' />
                </div>
                <div className="PostBottum">
                    <div className="postBottumLeft">
                        <Favorite className='bottumLeftIcon' style={{ color: "red" }} />
                        <ThumbUp className='bottumLeftIcon' style={{ color: "black" }} />
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottumRight">
                        <span className="postCounterText">{post.comment} . comments . share</span>
                    </div>
                </div>

                <hr className="footerHr" />
                <div className="postBottumfooter">
                    <div className="postBottumFooterItem">
                        <ThumbUpAltOutlined className='footerIcon' />
                        <span className="footerText">Like</span>
                    </div>
                    <div className="postBottumFooterItem">
                        <ChatBubbleOutline className='footerIcon' />
                        <span className="footerText">Comment</span>
                    </div>
                    <div className="postBottumFooterItem">
                        <ShareOutlined className='footerIcon' />
                        <span className="footerText">Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post