import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
//import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        !userId && (userId = 2); 
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        
        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status}
                updateStatus = {this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(connect(mapStateToProps, {setProfile, getStatus, updateStatus}), withRouter, 
//withAuthRedirect
)(ProfileContainer)
