import React from 'react';
import { connect } from 'react-redux';
import { fetchStylesFromApi, removeFromFavorites } from '../actions/styles'
import { fetchFavoritesFromApi } from '../actions/users';
import requiresLogin from "./requires-login";
import './styles/style-list.css'

class Favorites extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchFavoritesFromApi(this.props.username, this.props.token))
    this.props.dispatch(fetchStylesFromApi())
  }

  render() {
     const styles = this.props.styles.map((style, index) =>
      <section key={index} className="card">
        
        <figure className="card__thumbnail">
          <img src={style.imgUrl} alt={style.title} />
          <main className="card__description">
            <header className="card__title">
              <h3>{style.title}</h3>
            </header>
            <p>Length: {style.length}</p>
          </main>
        </figure>
         <a href="#" className="button"
          onClick={() => this.props.dispatch(removeFromFavorites(style.id, localStorage.getItem('authToken')))}
          name="remove-from-favorites">Remove from favorites
        </a>

      </section>
    )


    const favorites = this.props.favorites.map((favorite, index) => 
      <li key={index}>
        {favorite}
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
            {styles}
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
  token: state.auth.authToken,
  username: state.auth.currentUser.username,
})

export default requiresLogin()(connect(mapStateToProps)(Favorites));
