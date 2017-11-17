import React from 'react';
import {connect} from 'react-redux';
import WorkoutForm from './WorkoutForm';
import { editWorkout } from '../actions/workouts';
import {removeWorkout} from '../actions/workouts';

const EditWorkoutPage = (props) => {
  return (
    <div>
      <WorkoutForm
        workout={props.workout}
        onSubmit={(workout) => {
          props.dispatch(editWorkout(props.workout.id, workout));
          props.history.push('/dashboard');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeWorkout({id: props.workout.id}));
        props.history.push('/dashboard');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    workout: state.workouts.find((workout) => workout.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditWorkoutPage);