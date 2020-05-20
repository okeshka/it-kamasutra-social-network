import { usersAPI } from '../api/api';
import { updateObjectArray } from '../utils/object-helpers';

const FOLLOW= "social-network/users-reducer/FOLLOW"; //redux-ducks
const UNFOLLOW= "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';


let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] 
};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case FOLLOW: 
            return {
                ...state, 
                users: updateObjectArray(state.users, action.userId, "id", {followed: true})
            }
             
        case UNFOLLOW:
            return {
                ...state, 
                users: updateObjectArray(state.users, action.userId, "id", {followed: false}) 
            }
        
        case SET_USERS: 
            return {
                ...state,
                users: action.users,
            };
        
        case SET_PAGE:
            return {
                ...state, 
                currentPage: action.page
            }
        
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.preloader
            }
        
            case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
                return {
                 ...state,
                 followingInProgress: action.following ? 
                 [...state.followingInProgress, action.userId] :
                 state.followingInProgress.filter( id => id !== action.userId)
                }

            default: return state;
    }  
}

export const followSuccess = (userId) => ( {type: FOLLOW, userId} );
export const unfollowSuccess = (userId) => ( {type: UNFOLLOW, userId} );
export const setUser = (users) => ( {type: SET_USERS, users} );
export const setPage = (page) => ( {type: SET_PAGE, page});
export const setTotallUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setPreloadUser = (preloader) => ( {type: TOGGLE_IS_FETCHING, preloader} );
export const setFollowingInProgress = (following, userId) => ( {type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, following, userId} );

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(setPreloadUser(true));
    dispatch(setPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setPreloadUser(false));
    dispatch(setUser(data.items));
    dispatch(setTotallUsersCount(data.totalCount))
};

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(setFollowingInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
     followUnfollow(dispatch, userId, usersAPI.setFollow.bind(usersAPI), followSuccess);    
};

export const unfollow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.setUnFollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;