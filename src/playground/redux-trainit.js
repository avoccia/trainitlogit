

// Store Creation
const store = createStore(
  combineReducers({
    workouts: workoutsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleWorkouts = getVisibleWorkouts(state.workouts, state.filters);
  console.log(visibleWorkouts);
});

const workoutOne = store.dispatch(addWorkout({description: 'Running', time: 30, createdAt: -21000}));
const workoutTwo = store.dispatch(addWorkout({description: 'Gym', time: 60, createdAt: 1000}));

// store.dispatch(removeWorkout({id: workoutOne.workout.id}));
// store.dispatch(editWorkout(workoutTwo.workout.id, {time: 90}));

// store.dispatch(setTextFilter('running'));
// store.dispatch(setTextFilter());

store.dispatch(sortByTime());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  workouts: [{
    id: 'myid',
    description: 'Running', // Running, Walking, Biking, Sports, Gym
    note: 'Ran 5 miles',
    time: 60,
    createdAt: 0
  }],
  filters: {
    text: 'running',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};