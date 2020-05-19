import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { inisializedApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preload from './components/common/preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.inisializedApp();
  }

  render() { 
    if (!this.props.inisialized) return <Preload />;
    return (
        <div className = "app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className = "app-wrapper-content">
            <Route path = '/dialogs' render = { () => <DialogsContainer /> } />
            <Route path = '/profile/:userId?' render = { () => <ProfileContainer /> } /> 
            <Route path = '/users' render = { () => <UsersContainer /> } />
            <Route path = '/login' render = { () => <LoginPage /> } />
          </div>
        </div>
    );
  }
}

// при connect плохо работает Route, надо обернуть withRoute

const mapStateToProps = state => ({
  inisialized: state.app.inisialized
})

export default compose(withRouter, connect(mapStateToProps, {inisializedApp}))(App);
