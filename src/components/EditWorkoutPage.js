import React from 'react';
import {connect} from 'react-redux';
import WorkoutForm from './WorkoutForm';
import { startEditWorkout, startRemoveWorkout } from '../actions/workouts';

export class EditWorkoutPage extends React.Component {
  onSubmit = (workout) => {
    this.props.startEditWorkout(this.props.workout.id, workout);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveWorkout({id: this.props.workout.id});
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Workout</h1>
          </div>
        </div>
        <div className="content-container">
          <WorkoutForm
            workout={this.props.workout}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
        </div>
        
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
    workout: state.workouts.find((workout) => workout.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditWorkout: (id, workout) => dispatch(startEditWorkout(id, workout)),
  startRemoveWorkout: (data) => dispatch(startRemoveWorkout(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkoutPage);