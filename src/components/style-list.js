import React from 'react';
import { connect } from 'react-redux';
import { fetchStylesFromApi, addToFavorites } from '../actions/styles'
import './styles/style-list.css'

class StyleList extends React.Component {
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
          onClick={() => this.props.dispatch(addToFavorites(style.id, localStorage.getItem('authToken')))}
          name="add-to-favorites">Add to favorites
        </a>

      </section>
    )

    return (
      <div className="card-container">
        {styles}
      </div>
    )

  }
}

const mapStateToProps = state => ({
  styles: state.style.styles
})

export default connect(mapStateToProps)(StyleList)