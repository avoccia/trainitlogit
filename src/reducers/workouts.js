// Workouts Reducer
const workoutsReducerDefaultState = [];

export default (state = workoutsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return [
        ...state,
        action.workout
      ];
    case 'REMOVE_WORKOUT':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_WORKOUT':
      return state.map((workout) => {
        if (workout.id === action.id) {
          return {
            ...workout,
            ...action.updates
          };
        } else {
          return workout;
        }
      });
    case 'SET_WORKOUTS':
      return action.workouts;
    default:
      return state;
  }
};