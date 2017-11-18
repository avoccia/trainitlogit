import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_WORKOUT
export const addWorkout = (workout) => ({
  type: 'ADD_WORKOUT',
  workout
});

// Start ADDWORKOUT
export const startAddWorkout = (workoutData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      time = 0,
      createdAt = 0
    } = workoutData;
    const workout = {description, note, time, createdAt};

   return database.ref(`users/${uid}/workouts`).push(workout).then((ref) => {
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

// START_REMOVE_WORKOUT
export const startRemoveWorkout = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/workouts/${id}`).remove().then(() => {
      dispatch(removeWorkout({id}));
    });
  };
};

// EDIT_WORKOUT
export const editWorkout = (id, updates) => ({
  type: 'EDIT_WORKOUT',
  id,
  updates
});

// START_EDIT_Workout
export const startEditWorkout = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/workouts/${id}`).update(updates).then(() => {
      dispatch(editWorkout(id, updates));
    });
  };
};

// SET_WORKOUTS
export const setWorkouts = (workouts) => ({
  type: 'SET_WORKOUTS',
  workouts
});

// SET_START_WORKOUTS
export const startSetWorkouts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/workouts`).once('value').then((snapshot) => {
      const workouts = [];

      snapshot.forEach((childSnapshot) => {
        workouts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setWorkouts(workouts));
    });
  };
};