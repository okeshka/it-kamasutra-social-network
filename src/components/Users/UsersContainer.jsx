import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, unfollow, setPage, setPreloadUser, 
        setFollowingInProgress, getUsers } from '../../redux/users-reducer';
import Preload from '../common/preloader/Preloader';


class UsersAPIComponent extends React.Component {
 
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize)
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

let UsersContainer = connect(mapStateToProps, { setPreloadUser,
                                                setPage,  setFollowingInProgress,
                                                getUsers, follow, unfollow})(UsersAPIComponent);
export default UsersContainer;