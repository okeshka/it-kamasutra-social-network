import React from 'react';
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = ({dialogs, messages, newMessageBody, dispatch}) => {

    let onMessageClick = () => {
        dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (textBody) => {
        dispatch(updateNewMessageBodyCreator(textBody));
    };

    return (
        <Dialogs byMessageClick = {onMessageClick} byNewMessageChange = {onNewMessageChange} 
                dialogs = {dialogs} messages = {messages} newMessageBody = {newMessageBody}
        />
    )
}

export default DialogsContainer;