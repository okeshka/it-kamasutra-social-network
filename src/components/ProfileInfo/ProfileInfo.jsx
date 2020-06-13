import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preload from '../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../assets/img/user.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    
    const [editMode, setEditMode] = useState(false);
    
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => setEditMode(false));
    };

    if (!profile) return <Preload/>

    const onMainPhotoLoad = event => {
        event.target.files.length && savePhoto(event.target.files[0]) 
    }

    return (
        <div className = {s.descriptionBlock}>
            <img src = {profile.photos.large || userPhoto} alt = 'morda litsa' className = {s.avatar}/>
                {isOwner && <input  type = 'file' onChange = {onMainPhotoLoad} />}
            {editMode ? 
                <ProfileDataForm initialValues = {profile} profile = {profile} onSubmit = {onSubmit} />: 
                <ProfileData profile = {profile} isOwner = {isOwner} goToEditMode = {() => setEditMode(true)}/>}
            <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus} />
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            {isOwner && <div><button onClick = {goToEditMode}>Edit Profile</button></div>}
            <div>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div><b>My professional skils: </b>
                {profile.lookingForAJob ? profile.lookingForAJobDescription: 'No information'}
            </div>
            <div>
                <b>About me: </b> {profile.aboutMe ? profile.aboutMe: 'No information'}
            </div>
            <div>
                <b>Contacts: </b>
                {Object.keys(profile.contacts).map((contact, index) => {
                    return <Contacts key = {index} contactTitle = {contact} contactValue = {profile.contacts['contact']}/>})}
            </div>
        </>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default ProfileInfo;