import React from 'react';
import c from './ProfileInfo.module.css';
import Post from '../../Post/Post';

const ProfileInfo = (props) => {
    let posts = props.posts.map(
        m => <Post message = {m.message} countLike = {m.countLike} />
    ); 
    let newPost = React.createRef();
    let addNewPost = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
        //props.dispatch(updateNewPostTextActionCreator(text));
    }


    return (
        <div className={c.wrapper} >
            <div className={c.avatar}>
                <img src="https://static.tildacdn.com/tild3463-3532-4935-b937-613539333262/PicsArt_11-14-051826.jpeg" alt=""/>
                <p>Description</p>
            </div>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
            <button onClick={addNewPost}>Send post</button>
            <div>
                {posts}
            </div>
        </div>
        
    );
}

export default ProfileInfo;