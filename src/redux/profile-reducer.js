const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
        {id: 2, message: 'Have a nice day', likesCount: 3}, 
        {id:3, message: 'Good morning', likesCount: 5} 
        ],
    newPostText: 'PUTIN HUILO',
    profile: null
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
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile,
                }
            }
            default: return state;
    }  
}

export const addPostActionCreator = () => ( {type: ADD_POST} );

export const updateNewPostTextActionCreater = text => 
    ( {type: UPDATE_NEW_POST_TEXT, newText: text} );

export const setUserProfile = profile => 
    ( {type: SET_USER_PROFILE, profile} )

export default profileReducer;