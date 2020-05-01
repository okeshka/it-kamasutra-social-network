import React from 'react';
import s from './ProfileInfo.module.css';
import Preload from '../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {
    if (!props.profile) return <Preload/>
    return (
        <div>
            {/* <div>
                <img 
                src = "https://pix10.agoda.net/hotelImages/909036/-1/d7f785d78ec28000c28944ba6e183433.jpg?s=1024x768"  alt = "sea"/>
            </div>   */}
            <div className = {s.descriptionBlock}>
                <img src = {props.profile.photos.large} alt = 'morda litsa'/>
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;