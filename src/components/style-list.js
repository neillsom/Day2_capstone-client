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

	render() {
		// const styles = this.props.styles.map((style,index) =>
		// 	<li key={index}>
		// 		{style}
		// 	</li>
		// )

		return (
			<div>
				<h1>Style List</h1>
				<button onClick={() => this.props.dispatch(fetchStylesFromApi())}>Fetch styles from api</button>
				<ul>

				</ul>
			</div>
		)

	}
}

const mapStateToProps = state => ({
	styles: state.styles
})

export default connect(mapStateToProps)(StyleList)