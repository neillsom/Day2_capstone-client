import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "../index.css"
import "./styles/landing-page.css";

import LoginForm from "./login-form";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
	return <Redirect to="/dashboard" />;
  }

  return (
	<div className="landing">
	  <div className="loginbox">
			<h2>landing page h2</h2>
			<LoginForm />
			<div className="signup">
			<p>Not registered?</p>
			  <Link to="/register" className="signup-button">Sign up</Link>
			</div>
		</div>
	  <div className="infoaboutapp">
	  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  </div>
	</div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
