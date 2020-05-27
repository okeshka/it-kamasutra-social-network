import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, withRouter, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Provider, connect } from 'react-redux';
import { inisializedApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preload from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import withLazyLoad from './components/hoc/withLazyLoad';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));

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
            <Route path = '/dialogs' render = {withLazyLoad(DialogsContainer)}/>
            <Route path = '/profile/:userId?' render = {withLazyLoad(ProfileContainer)}/> 
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

const AppContainer = compose(withRouter, connect(mapStateToProps, {inisializedApp}))(App);

const SamuraiApp = props => {
  return (
    <Provider store = {store}>
          <HashRouter > 
            {/*For Github pages deploy with BrowserRouter basename = {process.env.PUBLIC_URL} for react-router, 
            replace BrowserRouter with HashRouter, #anchor apperance*/}
            <AppContainer />
          </HashRouter>
    </Provider>
  )
}

export default SamuraiApp;