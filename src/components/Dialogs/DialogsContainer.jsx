import React from 'react';
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return <StoreContext.Consumer> 
        {      // фигурная скобка обязательно с новой строки
            (store) => {
                let state = store.getState().dialogsPage;
                let onMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                
                let onNewMessageChange = (textBody) => {
                    store.dispatch(updateNewMessageBodyCreator(textBody));
                };

                return (
                    <Dialogs byMessageClick = {onMessageClick} byNewMessageChange = {onNewMessageChange} 
                            dialogs = {state.dialogs} messages = {state.messages} newMessageBody = {state.newMessageBody}
                    />
                )
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;