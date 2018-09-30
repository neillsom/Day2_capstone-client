import React from "react";
import { connect } from "react-redux";
import { clearAuth, info } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import "../index.css"
import "./styles/header-bar.css";
import { Link } from 'react-router-dom';

export class HeaderBar extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {

    let loggedInButtons;
    if (this.props.loggedIn) {
      loggedInButtons = (
        <div>
          <Link to="/dashboard">
            <button className="go-to-dashboard-button">
              Dashboard
          </button>
          </Link>
          <Link to="/favorites">
            <button
              onClick={() => console.log('favorites link clicked')}
              className="go-to-favorites-button">
              My favorites
          </button>
            <button className="logout-button" onClick={() => this.logOut()}>
              Logout
          </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="header-bar">
        <div className="header">
          <h1 className="header-title">Day2 HeaderBar</h1>
        </div>

        {loggedInButtons}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  info: state.auth.info
});

export default connect(mapStateToProps)(HeaderBar);




























