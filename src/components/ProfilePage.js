import React from 'react';
import {firebase} from '../firebase/firebase';
import database from '../firebase/firebase';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Profile</h1>
            <p>Under Construction</p>
          </div>
        </div>
        <div className="content-container">
        </div>
      </div>
    );
  }
}