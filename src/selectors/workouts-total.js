export default (workouts) => {
  return workouts
    .map((workout) => workout.time)
    .reduce((sum, value) => sum + value, 0);
};