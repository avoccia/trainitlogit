import React from 'react';
import {connect} from 'react-redux';
import WorkoutListItem from './WorkoutListItem';
import selectWorkouts from '../selectors/workouts';

const WorkoutList = (props) => (
  <div>
    <h1>Workout List</h1>
    {props.workouts.map((workout) => {
      return <WorkoutListItem key={workout.id} {...workout} />
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    workouts: selectWorkouts(state.workouts, state.filters)
  };
};

export default connect(mapStateToProps)(WorkoutList);