import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
//import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) this.props.history.push('/login'); // редирект
        };
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, nextProps, snapshot) {
        this.props.match.params.userId !== prevProps.match.params.userId && this.refreshProfile();
    }

    render() {
        
        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status}
                isOwner = {!this.props.match.params.userId} //если owner this.props.match.params.userId = undefined
                updateStatus = {this.props.updateStatus} savePhoto = {this.props.savePhoto}
                //saveProfile = {this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

});

export default compose(connect(mapStateToProps, {setProfile, getStatus, updateStatus, savePhoto, saveProfile}), withRouter, 
//withAuthRedirect
)(ProfileContainer)
