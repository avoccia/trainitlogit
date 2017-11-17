import uuid from 'uuid';

// ADD_WORKOUT
export const addWorkout = (
  {
    description = '',
    note = '',
    distance = 0,
    time = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_WORKOUT',
  workout: {
    id: uuid(),
    description,
    note,
    time,
    distance,
    createdAt
  }
});

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