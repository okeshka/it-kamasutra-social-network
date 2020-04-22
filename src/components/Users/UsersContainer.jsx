import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUserAC, setPageAC, setTotallUsersCountAC, setPreloadUserAC, setFollowingInProgressAC} from '../../redux/users-reducer';
import Preload from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
 
    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setPreloadUser(false);
                this.props.setUser(data.items);
                this.props.setTotalUsers(data.totalCount)}
            )
    };

    onPageChange = (page) => {
        this.props.setPage(page);
        this.props.setPreloadUser(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {this.props.setPreloadUser(false);
                this.props.setUser(data.items)}
            );
    };
    render() {
        return <>
                    {this.props.isFetching ? <Preload /> : null}
                    <Users totalUsersCount = {this.props.totalUsersCount} 
                        pageSize = {this.props.pageSize} 
                        onPageChange = {this.onPageChange} 
                        currentPage = {this.props.currentPage}
                        users = {this.props.users} 
                        follow = {this.props.follow} 
                        unfollow = {this.props.unfollow}
                        setFollowingInProgress = {this.props.setFollowingInProgress}
                        isFollowingInProgress = {this.props.isFollowingInProgress}
                    />
                </>
    }
};

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress,
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
        },
        setPage: page => {
            dispatch(setPageAC(page))
        },
        setTotalUsers: total => {
            dispatch(setTotallUsersCountAC(total))
        },
        setPreloadUser: preloader => {
            dispatch(setPreloadUserAC(preloader))
        },
        setFollowingInProgress: (following, userId) => {
            dispatch(setFollowingInProgressAC(following, userId))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;