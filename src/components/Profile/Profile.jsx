import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css'


const Profile = (props) => {
    return (
    <div className={c.content}>
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABceL_FxRrEg1Jm2LyiYugCJwBkJ2v4GmCBWQ_JNLBXCu1tpO1CMoOxGk9R74PCzrCR0FLIrjdgZlyIHnZEuiHArY6C9G.jpg?r=a82" alt=""/>
        <p>Main content</p>
        <MyPosts />
    </div>
    );
}

export default Profile;