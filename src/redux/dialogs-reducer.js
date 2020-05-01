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
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageBody}],
            };        

        default: return state;  
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;