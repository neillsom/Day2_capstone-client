import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import StyleList from './components/style-list';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Favorites from './components/favorites';



ReactDOM.render(

  <Provider store={store}>
    <Router>
      <div className="user-creation-login">
        <header role="banner">
          <h1>Day2 Hair</h1>
        </header>
        <main role="main">
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/favorites" component={Favorites} />

        </main>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
