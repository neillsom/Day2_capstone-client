import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/users';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//
import { fetchStylesFromApi } from '../actions/styles'

class Favorites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: props.styles
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchStylesFromApi())
  }

  render() {
    // const favorites = this.props...map((favorite, index) => )

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

const mapStateToProps = state => ({
  styles: state.style.styles
})

export default connect(mapStateToProps)(Favorites);
