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
    // const myFavs = this.props.favorites;
    // const newArr = myStyles.map(x => x.id);
    // filter styles, remove by fav ids vs style ids, then map
    // convert styles list to obj

    const favorites = this.props.favorites
      .map(favorite => myStyles.find(style => favorite === style.id))
      .map((favorite, index) =>

        <section key={index} className="card">

          <figure className="card__thumbnail">
            <img src={favorite.imgUrl} alt={favorite.title} />
            <main className="card__description">
              <header className="card__title">
                <h3>{favorite.title}</h3>
              </header>
              <p>Length: {favorite.length}</p>
            </main>
          </figure>
          <a href="#" className="button"
            onClick={() => this.props.dispatch(removeFromFavorites(favorite.id, localStorage.getItem('authToken')))}
            name="remove-from-favorites">Remove from favorites
        </a>

        </section>
      )

    return (
      <div className="app-container" role="region">
        <div className="styleList-container" role="region">
          <h2>{this.props.username}'s favorites</h2>
          <div className="card-container">
          	{favorites}
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
