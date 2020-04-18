import React from 'react';
import Axios from 'axios';
import Users from './Users';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUserAC, setPageAC, setTotallUsersCountAC } from '../../redux/users-reducer';

class UsersAPIComponent extends React.Component {
 
    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUser(responce.data.items);
                this.props.setTotalUsers(responce.data.totalCount)
            });
    };

    onPageChange = (page) => {
        this.props.setPage(page);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(responce => this.props.setUser(responce.data.items));
    };
    render() {
        return <Users totalUsersCount = {this.props.totalUsersCount} pageSize = {this.props.pageSize} 
                    onPageChange = {this.onPageChange} currentPage = {this.props.currentPage}
                    users = {this.props.users} follow = {this.props.follow} unfollow = {this.props.unfollow}
                />
    }
};

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;