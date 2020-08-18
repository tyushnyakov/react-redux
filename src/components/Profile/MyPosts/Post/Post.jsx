import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return(
        <div className={c.post}>
            <div><img src="https://static.tildacdn.com/tild3463-3532-4935-b937-613539333262/PicsArt_11-14-051826.jpeg" alt=""/></div>
            <div>{props.message}</div>
            <div className={c.like}>like:{props.countLike}</div>
        </div>
    );
}

export default Post;