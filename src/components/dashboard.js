import React from 'react';
import { connect } from 'react-redux';
// import actions
import StyleList from './style-list';
import HeaderBar from './header-bar';

import './styles/style-list.css';
import './styles/dashboard.css';
import { logoutUser } from '../actions/users';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';

class Dashboard extends React.Component {
 
  render() {
    return (
      <div className="app-container" role="region" aria-labelledby="region1">
        
        <HeaderBar />

        <Link to="/favorites">
          <button onClick={() => console.log('favorites link clicked')} className="go-to-favorites-button">My favorites</button>
        </Link>

        <header role="banner">
          <h1>Dashboard</h1>
        </header>
        <div className="dashboard">
        </div>
        <div className="styleList-container" role="region" aria-labelledby="region3">
          <StyleList />
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
