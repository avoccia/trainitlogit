// Get Visible Workouts

export default (workouts, {text, sortBy, startDate, endDate}) => {
  return workouts.filter((workout) => {
    const startDateMatch = typeof startDate !== 'number' || workout.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || workout.createdAt <= endDate; 
    const textMatch = workout.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'time') {
      return a.time < b.time ? 1 : -1;
    }
  });
};
