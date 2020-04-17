import Users from './Users';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUserAC } from '../../redux/users-reducer';

let mapStateToProps = state => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId))
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId))
        },
        setUser: users => {
            dispatch(setUserAC(users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;