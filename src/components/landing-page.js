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
	<div className="infoaboutapp">
	  	<h1>Less time,<br />more feeling fine.</h1>
	  	<p>Spend less time getting ready in the morning worring about how to style your hair. Day2 Hair has hundreds of hairstyles recommended just for you. </p>
	  </div>
	  <div className="loginbox">
			<h2>demouser</h2>
			<LoginForm />
			<div className="signup">
			<p>Not registered?</p>
			  <Link to="/register" className="signup-button">Sign up</Link>
			</div>
		</div>
	</div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
