import React from "react";
import { connect } from "react-redux";
import { clearAuth, info } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import "../index.css"
import "./styles/header-bar.css";

export class HeaderBar extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout-button" onClick={() => this.logOut()}>
          Logout
        </button>
      );
    }

    return (
      <div className="header-bar">
        <div className="header">
          <h1 className="header-title">Day2 HeaderBar</h1>
        </div>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  info: state.auth.info
});

export default connect(mapStateToProps)(HeaderBar);