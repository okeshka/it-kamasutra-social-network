import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({totalUsersCount, pageSize, onPageChange, currentPage, users, ...props}) => {
        return ( 
            <div>
                <Paginator  totalUsersCount = {totalUsersCount} pageSize = {pageSize}
                    onPageChange = {onPageChange} currentPage = {currentPage} />
                {users.map(user => 
                    <User key = {user.id} user = {user} isFollowingInProgress = {props.isFollowingInProgress} 
                        unfollow = {props.unfollow} follow = {props.follow} />
                )}
            </div>
        )
}

export default Users;