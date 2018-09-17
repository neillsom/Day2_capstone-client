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
		return (
			<div>
				<h1>Style List</h1>
				<button onClick={() => this.props.dispatch(fetchStylesFromApi())}>Fetch styles from api</button>
			</div>
		)

	}
}

export default connect()(StyleList)