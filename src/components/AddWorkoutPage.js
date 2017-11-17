import React from 'react';
import {connect} from 'react-redux';
import WorkoutForm from './WorkoutForm';
import {startAddWorkout} from '../actions/workouts';

export class AddWorkoutPage extends React.Component {
  onSubmit = (workout) => {
    this.props.startAddWorkout(workout);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Workout</h1>
        <WorkoutForm 
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWorkout: (workout) => dispatch(startAddWorkout(workout))
});


export default connect(undefined, mapDispatchToProps)(AddWorkoutPage);