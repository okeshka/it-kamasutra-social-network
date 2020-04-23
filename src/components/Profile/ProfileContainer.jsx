import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfile} from '../../redux/profile-reducer';
import {withRouter, Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        !userId && (userId = 2); 
        this.props.setProfile(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to = '/login' />
        return (
            <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setProfile})(WithUrlDataContainerComponent);