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



    // Only render the log out button if we are logged in
    let loggedInButtons;
    if (this.props.loggedIn) {
      loggedInButtons = (
        <div><button className="logout-button" onClick={() => this.logOut()}>
          Logout
        </button>
          <Link to="/favorites">
            <button
              onClick={() => console.log('favorites link clicked')}
              className="go-to-favorites-button">
              My favorites
          </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="header-bar">
        <h3>{this.props.currentUser}</h3>
        <div className="header">
          <h1 className="header-title">Day2 HeaderBar</h1>
        </div>
        <Link to="/dashboard">
          <button
            onClick={() => console.log('dashboard link clicked')}
            className="go-to-dashboard-button">
            Dashboard
          </button>
        </Link>

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