import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchFavoritesFromApi } from '../actions/users'

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: props.favorites
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchFavoritesFromApi())
  }

  render() {
    // const favorites = this.props.favorites.map((favorite, index) => 
    //   <li key={index}>
    //     {favorite}
    //   </li>
    // )

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
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites);
