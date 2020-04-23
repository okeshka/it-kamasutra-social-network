import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';


const Dialogs = ({dialogs, messages, newMessageBody, byMessageClick, byNewMessageChange, isAuth}) => {

    let onMessageClick = () => {
        byMessageClick();
    }
    
    let onNewMessageChange = (event) => {
        let textBody = event.target.value;
        byNewMessageChange(textBody);
    };

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
                <div>
                    <textarea placeholder = "Hyauk" value = {newMessageBody} onChange = {onNewMessageChange}/>
                </div>
                <div>
                    <button type = "button" onClick = {onMessageClick}>Жми меня</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;