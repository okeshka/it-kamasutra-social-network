import Dialogs from "./Dialogs"
import {sendMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";

let mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = dispatch => {
    return {
        byMessageClick: newMessageBody => {
            dispatch(sendMessageCreator(newMessageBody));
        }
        
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);