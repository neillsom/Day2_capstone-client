import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StyleList from './components/style-list'

const styles = [
	'Long Spiral Curls With Single Side Braid',
	'Relaxed Center-Parted Brown Waves With Highlights',
	'Straight Layered Blonde Hair With Side-Swept Bang'
]

ReactDOM.render(
	<StyleList styles={styles}/>, 
	document.getElementById('root')
);
registerServiceWorker();
