import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, unfollow, setPage, setPreloadUser, 
        setFollowingInProgress, getUsers } from '../../redux/users-reducer';
import Preload from '../common/preloader/Preloader';
//import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getUser, getPageSize, getTotalUsersCount, 
    getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
 
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
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getFollowingInProgress(state),
    }
};

export default compose(connect(mapStateToProps, { setPreloadUser,
    setPage,  setFollowingInProgress,
    getUsers, follow, unfollow}), 
    //withAuthRedirect
    )(UsersContainer);