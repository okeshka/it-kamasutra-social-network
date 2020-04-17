const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'Pruvet'}, 
        {id:3, message: 'Yooo'} 
    ],
    dialogs: [
        {id: 1, name: 'Oleshych'}, 
        {id: 2, name: 'Alex'}, 
        {id:3, name: 'Helga'}, 
        {id:4, name: 'Perdak'},
        {id:5, name: 'Cherdak'}
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };       
    
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageBody}],
                newMessageBody: '',
            };        

        default: return state;  
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (textBody) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: textBody});

export default dialogsReducer;