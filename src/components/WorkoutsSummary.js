import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectWorkouts from '../selectors/workouts';
import selectWorkoutsTotal from '../selectors/workouts-total';

export const WorkoutsSummary = ({workoutCount, workoutsTotal, hiddenWorkoutCount}) => {
  const workoutWord = workoutCount === 1 ? 'workout' : 'workouts';
  const formattedWorkoutsTotal = numeral(workoutsTotal * 60).format('00:00:00');
  return (
    <div>
      <h1>Viewing {workoutCount} {workoutWord} totalling {formattedWorkoutsTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleWorkouts = selectWorkouts(state.workouts, state.filters);
  const invisibleWorkouts = !visibleWorkouts;

  return {
    workoutCount: visibleWorkouts.length,
    workoutsTotal: selectWorkoutsTotal(visibleWorkouts),
  };
};

export default connect(mapStateToProps)(WorkoutsSummary);