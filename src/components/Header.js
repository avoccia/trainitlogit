import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/dashboard">
          <h1>Train It Log It</h1>
        </NavLink>
        <ul className="header__nav">
          <li><NavLink className="button button--link" activeClassName="is-active" to="/leaderboard">Leaderboard 🥇</NavLink></li>
          <li><NavLink className="button button--link" activeClassName="is-active" to="/create">Add Workout</NavLink></li>
          <li><button className="button button--link" onClick={startLogout}>Logout</button></li>
        </ul>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);