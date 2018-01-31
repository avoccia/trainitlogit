import React from 'react';
import database from '../firebase/firebase';
import {connect} from 'react-redux';
import {firebase} from './../firebase/firebase';

export default class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {leaderBoard: null};
  };
  
  componentDidMount() {
    // Reference to the database
    let ref = database.ref('users');
    
    ref.once('value').then((snapshot) => {
      var users = snapshot.val();
      console.log('Users Data', users);
      var keys = Object.keys(users);
      console.log('Keys', keys);
      let running = [];
      var runningTotal = 0;
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var workouts = users[k].workouts;
        console.log(workouts);
        var workoutKeys = Object.keys(workouts);
        for (var p = 0; p < workoutKeys.length; p++) {
          var wk = workoutKeys[p];
          if (workouts[wk].description === "Running") {
            runningTotal += workouts[wk].time;
          }
        }

        if (runningTotal > 0) {
          running.push({
            [k]: runningTotal
          });
        }

        runningTotal = 0;

      }
        console.log(running);
        this.setState({leaderBoard: running});
    }).catch(function(error) {
      console.log('Failed to send notification to user:', error)
    });
  }

  render() {
    if(this.state.leaderBoard) {
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
                <ol>
                  {this.state.leaderBoard.map((workout) => (
                    <li>
                      {Object.keys(workout)[0]} - <strong>{workout[Object.keys(workout)[0]]}</strong>
                    </li>
                  ))}
                </ol>
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
  } else {
    return (<div>Loading...</div>);
  }
  }
}