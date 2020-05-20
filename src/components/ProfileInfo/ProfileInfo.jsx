import React from 'react';
import s from './ProfileInfo.module.css';
import Preload from '../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) return <Preload/>
    return (
        <div className = {s.descriptionBlock}>
            <img src = {profile.photos.large} alt = 'morda litsa'/>
            <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
        </div>
    )
}

export default ProfileInfo;