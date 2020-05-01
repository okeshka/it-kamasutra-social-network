import {usersAPI, profileAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
        {id: 2, message: 'Have a nice day', likesCount: 3}, 
        {id:3, message: 'Good morning', likesCount: 5} 
        ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {

            case ADD_POST: {
                return  {
                    ...state,
                    posts: [...state.posts, {id: 4, message: action.newPostText, likesCount: 5}],
                };
                
            }
                 
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile,
                }
            }
            case SET_STATUS: {
                return {
                    ...state,
                    status: action.status,
                }
            }
          
            default: return state;
    }  
}

export const addPost = (newPostText) => 
( {type: ADD_POST, newPostText} );

export const setUserProfile = profile => 
    ( {type: SET_USER_PROFILE, profile} );

const setStatus = status => 
    ({type: SET_STATUS, status});

export const setProfile = userId => dispatch => {
usersAPI.getMyProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
}

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
                .then(response => {
                    dispatch(setStatus(response.data));
                })
    }

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
                .then(response => {
                    if (response.data.resultCode === 0)
                    dispatch(setStatus(status));
                })
    }

export default profileReducer;