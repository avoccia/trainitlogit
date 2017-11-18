import React from 'react';
import {connect} from 'react-redux';
import WorkoutListItem from './WorkoutListItem';
import selectWorkouts from '../selectors/workouts';

export const WorkoutList = (props) => (
  <div>
    {
      props.workouts.length === 0 ? (
        <p>No Workouts</p>
      ) : (
        props.workouts.map((workout) => {
          return <WorkoutListItem key={workout.id} {...workout} />
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    workouts: selectWorkouts(state.workouts, state.filters)
  };
};

export default connect(mapStateToProps)(WorkoutList);