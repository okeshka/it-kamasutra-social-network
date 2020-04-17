const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
        {id: 2, message: 'Have a nice day', likesCount: 3}, 
        {id:3, message: 'Good morning', likesCount: 5} 
        ],
    newPostText: 'PUTIN HUILO',
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {

            case ADD_POST: {
                return  {
                    ...state,
                    posts: [...state.posts, {id: 4, message: state.newPostText, likesCount: 5}],
                    newPostText: ''
                };
                
            }
            case UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                };
                 
            }
            default: return state;
    }  
}

export const addPostActionCreator = () => ( {type: ADD_POST} );

export const updateNewPostTextActionCreater = text => 
    ( {type: UPDATE_NEW_POST_TEXT, newText: text} );

export default profileReducer;