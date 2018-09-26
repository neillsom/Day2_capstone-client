import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import "../index.css"


import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import Favorites from './favorites';
import RegistrationPage from './registration-page';

export class App extends React.Component {

  render() {
    return (
      <div className="app">
        <HeaderBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/register" component={RegistrationPage} />
      
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  displayInfo: state.auth.displayInfo
});

export default withRouter(connect(mapStateToProps)(App));
