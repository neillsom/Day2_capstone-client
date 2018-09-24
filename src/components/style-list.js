import React from 'react';
import { connect } from 'react-redux';
import { fetchStylesFromApi } from '../actions'

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
			<li key={index}>
				<h3>{style.title}</h3>
				<img src={style.imgUrl} />
			</li>
		)

		return (
			<div>
				<h1>Style List</h1>
				<ul>
					{styles}
				</ul>
			</div>
		)

	}
}

const mapStateToProps = state => ({
	styles: state.styles.styles
})

export default connect(mapStateToProps)(StyleList)