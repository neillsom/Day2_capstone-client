import React from 'react';
import { connect } from 'react-redux';
import StyleList from './style-list';
import requiresLogin from "./requires-login";
import './styles/style-list.css';
import './styles/dashboard.css';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <div className="app-container" role="region">

          <header className='banner' role="banner">
            <h1>Dashboard</h1>
            <h2>Hello {this.props.username}</h2>
          </header>

          <div className='filter-selector-forms'>
            <form className='length-form'>
              <fieldset>
                <legend>Length</legend>
                <div>
                  <input type="radio" id="short"
                    name="length" value="short" defaultChecked />
                  <label htmlFor="short">Short</label>
                </div>
                <div>
                  <input type="radio" id="Medium"
                    name="length" value="Medium" />
                  <label htmlFor="Medium">Medium</label>
                </div>
                <div>
                  <input type="radio" id="Long"
                    name="length" value="Long" />
                  <label htmlFor="Long">Long</label>
                </div>
              </fieldset>
            </form>

            <form className='clean-or-dirty-form'>
              <fieldset>
                <legend>Clean or Dirty</legend>
                <div>
                  <input type="radio" id="clean" name="length" value="clean" defaultChecked />
                  <label htmlFor="clean">Clean</label>
                </div>
                <div>
                  <input type="radio" id="dirty" name="length" value="dirty" />
                  <label htmlFor="dirty">Dirty</label>
                </div>
                 <div>
                  <input type="radio" id="either" name="length" value="either" />
                  <label htmlFor="either">Either</label>
                </div>
              </fieldset>
            </form>

            <button className='recommend-button'>
              Recommend!
            </button>

          </div>

          <div className="styleList-container" role="region">
            <StyleList />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstname} ${currentUser.lastname}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
