//import React from 'react';
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = dispatch => {
    return {
        byMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        byNewMessageChange: textBody => {
            dispatch(updateNewMessageBodyCreator(textBody));
        }  
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;