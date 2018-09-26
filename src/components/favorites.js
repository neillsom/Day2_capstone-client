import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Favorites extends React.Component {

  render() {

    return(
      <div>
        <Link to="/dashboard">
          <button className="link-to-dashboard-button">Dashboard</button>
        </Link>
        <ul className='userFavorites'>

          <li>One</li>
          <li>Two</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}

export default connect()(Favorites);
