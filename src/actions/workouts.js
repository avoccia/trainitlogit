import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_WORKOUT
export const addWorkout = (workout) => ({
  type: 'ADD_WORKOUT',
  workout
});

// Start ADDWORKOUT
export const startAddWorkout = (workoutData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      time = 0,
      createdAt = 0
    } = workoutData;
    const workout = {description, note, time, createdAt};

   return database.ref('workouts').push(workout).then((ref) => {
      dispatch(addWorkout({
        id: ref.key,
        ...workout
      }));
    });
  };
};

// REMOVE_WORKOUT
export const removeWorkout = ({id} = {}) => ({
  type: 'REMOVE_WORKOUT',
  id
});

// EDIT_WORKOUT
export const editWorkout = (id, updates) => ({
  type: 'EDIT_WORKOUT',
  id,
  updates
});