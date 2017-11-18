import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectWorkouts from '../selectors/workouts';
import selectWorkoutsTotal from '../selectors/workouts-total';

export const WorkoutsSummary = ({workoutCount, workoutsTotal}) => {
  const workoutWord = workoutCount === 1 ? 'workout' : 'workouts';
  const formattedWorkoutsTotal = numeral(workoutsTotal * 60).format('00:00:00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{workoutCount}</span> {workoutWord} totalling <span>{formattedWorkoutsTotal}</span></h1>
        <div className="page-header__actions">
        
        </div>
      </div>     
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleWorkouts = selectWorkouts(state.workouts, state.filters);

  return {
    workoutCount: visibleWorkouts.length,
    workoutsTotal: selectWorkoutsTotal(visibleWorkouts),
  };
};

export default connect(mapStateToProps)(WorkoutsSummary);