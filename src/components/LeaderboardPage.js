import React from 'react';

export default class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Leaderboard</h1>
            <p>Under Construction</p>
          </div>
        </div>
        <div className="content-container">
          <div className="row">
            <div className="row__medium-4">
              <h3>Running 🏃</h3>
            </div>
            <div className="row__medium-4">
              <h3>Walking 🚶‍</h3>
            </div>
            <div className="row__medium-4">
              <h3>Biking 🚴‍</h3>
            </div>
          </div>
          <div className="row">
            <div className="row__medium-4">
              <h3>Sports 🏈</h3>
            </div>
            <div className="row__medium-4">
              <h3>Gym 🏋️‍</h3>
            </div>
            <div className="row__medium-4">
              <h3>Overall Time 🕒</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}