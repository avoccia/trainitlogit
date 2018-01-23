import React from 'react';
import database from '../firebase/firebase';
import {connect} from 'react-redux';

export default class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);

    var ref = database.ref('users');
    ref.on('value', gotData, errData);
    var running;

    function gotData(data) {
      var users = data.val();
      console.log(users);
      var keys = Object.keys(users);
      console.log(keys);
      running = [];
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
        
        
        //console.log(k, time);
      }

      console.log(running);
      return running;
      
    }

    var list = gotData();
    console.log(list);

    function errData(err) {
      console.log('Error!');
      console.log(err);
    }
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