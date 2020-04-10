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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 5
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""; // пустое поле после поста
            this._callSubcriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        }
    }
} 

window.store = store;

export default store;