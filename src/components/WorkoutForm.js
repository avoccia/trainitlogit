import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do YYYY'));

export default class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.workout ? props.workout.description : '',
      showDistance: false,
      note: props.workout ? props.workout.note : '',
      time: props.workout ? (props.workout.time).toString() : '',
      distance: props.workout ? (props.workout.distance).toString() : '',
      createdAt: props.workout ? moment(props.workout.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      display: {display: 'none'}
    };
  }
  
  onDescriptionChange = (e) => {
    
    console.log('changing visibility');

    var description = e.target.value;
    this.setState(() => ({description}));
    if (e.target.value === 'Running'|| e.target.value === 'Walking' || e.target.value === 'Biking') {
          this.setState(() => ({display: document.querySelector('.ifRunWalkBike').style={display: 'inline'}}));
    } else if (e.target.value === 'Sports' || e.target.value === 'Gym') {
        this.setState(() => ({display: document.querySelector('.ifRunWalkBike').style={display: 'none'}}));
    } 
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onTimeChange = (e) => {
    const time = e.target.value;
  if (time.match(/^[0-9]*$/)) {
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
        time: parseInt(this.state.time, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }
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
          <div className="ifRunWalkBike" style={this.state.display}>
            <input
              type="text"
              placeholder="Distance 🕳️ (Miles)"
            />
          </div>
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