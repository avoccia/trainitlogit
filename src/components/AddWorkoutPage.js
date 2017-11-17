import React from 'react';
import {connect} from 'react-redux';
import WorkoutForm from './WorkoutForm';
import {addWorkout} from '../actions/workouts';

const AddWorkoutPage = (props) => (
  <div>
    <h1>Add Workout</h1>
    <WorkoutForm 
      onSubmit={(workout) => {
        props.dispatch(addWorkout(workout));
        props.history.push('/dashboard');
      }}
    />
  </div>
);

export default connect()(AddWorkoutPage);