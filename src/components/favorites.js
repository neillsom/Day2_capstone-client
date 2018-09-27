import React from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesFromApi } from '../actions/users'

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: props.favorites
    }
  }

  componentDidMount() {
    // need to pass in userId and token?
    this.props.dispatch(fetchFavoritesFromApi(this.props.username,this.props.token))
  }

  render() {

    // const favorites = this.props.favorites.map((favorite, index) => 
    //   <li key={index}>
    //     {favorite}
    //   </li>
    // )

    return(
      <div>
        <ul className='userFavorites'>

          <li>One</li>
          <li>Two</li>
          <li>3</li>
          <li>Is this working, {this.props.username}?</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.user.favorites.favorites, 
  username: state.auth.currentUser.username, 
  token: state.auth.authToken
})

export default connect(mapStateToProps)(Favorites);
