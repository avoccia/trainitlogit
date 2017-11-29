import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

const now = moment();

export default class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.workout ? props.workout.description : '',
      note: props.workout ? props.workout.note : '',
      time: props.workout ? (props.workout.time).toString() : '',
      distance: props.workout ? (props.workout.distance).toString() : '',
      createdAt: props.workout ? moment(props.workout.createdAt) : moment(),
      calendarFocused: false,
      display: props.workout && props.workout.description === 'Running' || 'Walking' || 'Biking' ? {display: 'inline'} : {display: 'none'},
      error: ''
    };
  }
  
  onDescriptionChange = (e) => {
    var description = e.target.value;
    this.setState(() => ({description}));
    if (e.target.value === 'Running' || e.target.value === 'Walking' || e.target.value === 'Biking') {
      this.setState(() => ({display: {display: 'inline'}}));
    } else if (e.target.value === 'Sports' || e.target.value === 'Gym') {
      this.setState(() => ({display: {display: 'none'}}));
    }
  };
  onDistanceChange = (e) => {
    const distance = e.target.value;
    if (!distance || distance.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({distance}));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onTimeChange = (e) => {
    const time = e.target.value;
    if (!time || time.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({time}));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({createdAt}));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.time) {
     this.setState(() => ({error: 'Please provide workout and time.'})); 
    } else {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        time: parseFloat(this.state.time, 10),
        distance: parseFloat(this.state.distance, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}  
          <select 
            className="select"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          >
            <option value="" defaultValue disabled hidden>Workout Completed 👊</option>
            <option value="Running">Running 🏃‍</option>
            <option value="Walking">Walking 🚶‍</option>
            <option value="Biking">Biking 🚴‍</option>
            <option value="Sports">Sports 🏈</option>
            <option value="Gym">Gym 🏋️‍</option>
          </select>
          <input
            type="number"
            className="text-input"
            placeholder="Distance (Miles)"
            value={this.state.distance}
            style={this.state.display}
            onChange={this.onDistanceChange}
          />
          <input
            type="text"
            className="text-input"
            placeholder="Time 🕒 (Minutes)"
            value={this.state.time}
            onChange={this.onTimeChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            className="textarea"
            placeholder="Add a note about your workout! 💪"
            value = {this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
            <button className="button button-add-workout-form">Save Workout</button>
          </div>
        </form>
    )
  }
}