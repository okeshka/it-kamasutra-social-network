import Dialogs from "./Dialogs"
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";

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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);