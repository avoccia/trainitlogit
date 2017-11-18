import React from 'react';
import {connect} from 'react-redux';
import WorkoutListItem from './WorkoutListItem';
import selectWorkouts from '../selectors/workouts';

export const WorkoutList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Workouts</div>
      <div className="show-for-desktop">Workout</div>
      <div className="show-for-desktop">Time</div>
    </div>
    <div className="list-body">
      {
        props.workouts.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Workouts</span>
          </div>
        ) : (
          props.workouts.map((workout) => {
            return <WorkoutListItem key={workout.id} {...workout} />
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

export default connect(mapStateToProps)(WorkoutList);