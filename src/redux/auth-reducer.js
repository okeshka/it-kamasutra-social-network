import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA= "SET-USERS-DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case SET_USERS_DATA: 
        
            return {
                ...state,
                ...action.payload
            } 
        
        default: return state;       
    }  
}

export const setAuthUserData = (userId, login, email, isAuth) => ( {type: SET_USERS_DATA, payload: {userId, login, email, isAuth}} );


export const setAuthMe = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode ===  0) {
    let {id, login, email} = data.data;
    dispatch(setAuthUserData(id, login, email, true));                   
        }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode ===  0) {
        dispatch(setAuthMe());                   
    }
    else { //stopSubmit - это AC от redux-form, 'login' -  название формы, _error - общая ошибка на всю форму
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode ===  0) {
        dispatch(setAuthUserData(null, null, null, false));                   
    }
}
 
export default authReducer;