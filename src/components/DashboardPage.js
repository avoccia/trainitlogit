import React from 'react';
import WorkoutList from './WorkoutList';
import WorkoutListFilters from './WorkoutListFilters';

const DashboardPage = () => (
  <div className="page-header">
    <WorkoutListFilters />
    <WorkoutList />
  </div>
);

export default DashboardPage;