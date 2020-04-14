//import React from 'react';
import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';


// const DialogsContainer = () => {
//     return <StoreContext.Consumer> 
//         {      // фигурная скобка обязательно с новой строки
//             (store) => {
//                 let state = store.getState().dialogsPage;
//                 let onMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
                
//                 let onNewMessageChange = (textBody) => {
//                     store.dispatch(updateNewMessageBodyCreator(textBody));
//                 };

//                 return (
//                     <Dialogs byMessageClick = {onMessageClick} byNewMessageChange = {onNewMessageChange} 
//                             dialogs = {state.dialogs} messages = {state.messages} newMessageBody = {state.newMessageBody}
//                     />
//                 )
//             }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
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