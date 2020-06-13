import React from 'react';
import { createField, Input, Textarea } from '../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';
import s from '../../components/common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <b>Full name: </b>{createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job: </b>{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div><b>My professional skils: </b> 
                {createField('My professional skils', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me: </b>
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <button>Submit form</button>
            </div>
            {error && <div className = {s.formSummaryError}>{error}</div>}   
            <div>
                <b>Contacts: </b>
                {Object.keys(profile.contacts).map((contact, index) => {
                    return <div key = {contact}>
                        <b>{contact}:</b> {createField(contact, `contacts[${contact}]`, [], Input)}
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataReduxForm;