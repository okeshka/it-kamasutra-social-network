import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLength } from '../../utils/validators/validators';

const Dialogs = ({dialogs, messages, newMessageBody, byMessageClick, isAuth}) => {

    const addNewMessage = (values) => 
    byMessageClick(values.newMessageBody);

    let dialogsElements = dialogs
        .map((number) => <DialogsItem key = {number.id} name = {number.name} id = {number.id}/>
    );
    let messagesElements = messages
        .map (number => <Message key = {number.id} message = {number.message} />)
    if (!isAuth) return <Redirect to = '/login' />
    return (
        <div className = {s.dialogs}>
            <div className = {s['dialogs-items']}> 
                { dialogsElements }  
            </div>
            <div className = {s.messages}>
                <div>
                    { messagesElements }
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength21 = maxLength(21);

const addMessageForm = props => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = {Textarea} name = 'newMessageBody' placeholder = "Enter your message" 
                    validate = {[required, maxLength21]}  
                />
            </div>
            <div>
                <button>Жми меня</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)

export default Dialogs;