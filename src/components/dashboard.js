import React from 'react';
import { connect } from 'react-redux';
import StyleList from './style-list';
import requiresLogin from "./requires-login";
import './styles/style-list.css';
import './styles/dashboard.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="app-container" role="region" aria-labelledby="region1">

        <header role="banner">
          <h1>Dashboard</h1>
          <h2>Hello {this.props.username}</h2>
        </header>
        <div className="dashboard">
        </div>
        <div className="styleList-container" role="region">
          <StyleList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstname} ${currentUser.lastname}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
