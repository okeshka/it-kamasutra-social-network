import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        !userId && (userId = 2); 
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    render() {
        console.log(this.props);
        return (
            <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);