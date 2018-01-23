import React from 'react';
import {connect} from 'react-redux';
import database from '../firebase/firebase';
import {scoreRef} from '../firebase/firebase';
import selectWorkouts from '../selectors/workouts';
const uid = getState().auth.uid;

export const LeaderboardList = (props) => (
  <div className="content-container">
    <div>
      {
        props.workouts.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Workouts</span>
          </div>
        ) : (
          database.ref(`users/${uid}/workouts`).once('value').then((snapshot) => {
            return <LeaderboardListItem key={workout.id} {...workout.id} />
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    workouts: selectWorkouts(state.workouts, state.filters)
  };
};

export default connect(mapStateToProps)(LeaderboardList);