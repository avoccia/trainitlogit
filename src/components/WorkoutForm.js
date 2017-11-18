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
      createdAt: props.workout ? moment(props.workout.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }
  
  onDescriptionChange = (e) => {
    var description = e.target.value;
    this.setState(() => ({description}));
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
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}  
        <form onSubmit={this.onSubmit}>
          <select 
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
            type="text"
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
            placeholder="Add a note about your workout! 💪"
            value = {this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Workout</button>
        </form>
      </div>
    )
  }
}