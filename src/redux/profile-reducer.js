import {usersAPI, profileAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_PHOTO = 'SET-PHOTO';
//const UPDATE_PROFILE = 'UPDATE-PROFILE';

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

            case DELETE_POST: {
                return {
                    ...state,
                    posts: state.posts.filter(element => element.id !== action.id)
                }
            }
            
            case SET_PHOTO: {
                return {
                    ...state,
                    profile: {...state.profile, photos:action.photos}
                }
            }

            // case UPDATE_PROFILE: {
            //     return {
            //         ...state,
            //         profile: action.profile
            //     }
            // }

            default: return state;
    }  
}

export const addPost = (newPostText) => 
( {type: ADD_POST, newPostText} );

export const setUserProfile = profile => 
    ( {type: SET_USER_PROFILE, profile} );

export const deletePost = id => 
( {type: DELETE_POST, id} );

const setStatus = status => 
    ({type: SET_STATUS, status});

const savePhotoSuccess = photos => 
    ({type: SET_PHOTO, photos});

// const saveProfileSuccess = profile => 
//     ({type: UPDATE_PROFILE, profile})

export const setProfile = userId => async (dispatch) => {
    const data = await usersAPI.getMyProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = userId => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = status => async dispatch => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) dispatch(setStatus(status));
}

export const savePhoto = file => async dispatch => {
    const response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) dispatch(savePhotoSuccess(response.data.photos));
}

export const saveProfile = profile => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.resultCode === 0) {
        dispatch(setProfile(userId))
    }
    else {
        dispatch(stopSubmit('editProfile', {_error: response.messages[0]}));
        return Promise.reject(response.messages[0]);
    }
   
}

export default profileReducer;