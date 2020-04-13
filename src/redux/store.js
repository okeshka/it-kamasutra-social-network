import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
                    posts: [
                        {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
                        {id: 2, message: 'Have a nice day', likesCount: 3}, 
                        {id:3, message: 'Good morning', likesCount: 5} 
                        ],
                    newPostText: 'PUTIN HUILO',
                    },
        dialogsPage: {
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
        }       
    },

    _callSubcriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
  
    subcribe(observer)  {
        this._callSubcriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubcriber(this._state);
    }
};

window.store = store;

export default store;