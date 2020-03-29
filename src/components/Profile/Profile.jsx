import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className = {s.content}>
            <div>
                <img src = "https://pix10.agoda.net/hotelImages/909036/-1/d7f785d78ec28000c28944ba6e183433.jpg?s=1024x768"  alt = "sea"/>
            </div>  
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile; 