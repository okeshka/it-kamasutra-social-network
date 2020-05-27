import React from 'react';
import s from './ProfileInfo.module.css';
import Preload from '../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../assets/img/user.png';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) return <Preload/>
    return (
        <div className = {s.descriptionBlock}>
            <img src = {profile.photos.large || userPhoto} alt = 'morda litsa' className = {s.avatar}/>
            <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus} />
        </div>
    )
}

export default ProfileInfo;