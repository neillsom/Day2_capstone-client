import React from 'react';
import { connect } from 'react-redux';
import { fetchStylesFromApi, removeFromFavorites } from '../actions/styles'
import { fetchFavoritesFromApi } from '../actions/users';
import requiresLogin from "./requires-login";
import './styles/style-list.css'

class Favorites extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchFavoritesFromApi(this.props.username, this.props.token));
    this.props.dispatch(fetchStylesFromApi());
  }

  render() {
    const myStyles = this.props.styles;
    const myFavs = this.props.favorites;
    const newArr = myStyles.map(x => x.id);

    // filter styles, remove by fav ids vs style ids, then map
    // convert styles list to obj

    const favorites = this.props.favorites
      .map(favorite => myStyles.find(style => favorite === style.id))
      .map((favorite, index) =>
        <li key={index}>
          <h3>{favorite.title}</h3>
          <img src={favorite.imgUrl} />
        </li>
      )

    return (
      <div className="app-container" role="region">
        <div className="styleList-container" role="region">
          <h2>{this.props.username}'s favorites</h2>
          <ul className='userFavorites'>
            {favorites}
          </ul>
          <div className="card-container">

          </div>
        </div>
      </div>
    )
  }
}

Favorites.defaultProps = {
  favorites: [],
}

const mapStateToProps = (state) => ({
  favorites: state.user.favorites.favorites,
  styles: state.style.styles,
  stylesIds: state.style.styles.map(x => x.id),
  token: state.auth.authToken,
  username: state.auth.currentUser.username,
})

export default requiresLogin()(connect(mapStateToProps)(Favorites));
