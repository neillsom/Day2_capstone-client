import React from 'react';

export default class StyleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			styles: props.styles
		}
	}

	render() {
		const styles = this.state.styles.map((style, index) => 
			<li key={index}>
				{style}
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
