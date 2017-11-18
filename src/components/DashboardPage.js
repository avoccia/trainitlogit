import React from 'react';
import WorkoutList from './WorkoutList';
import WorkoutListFilters from './WorkoutListFilters';
import WorkoutsSummary from './WorkoutsSummary';

const DashboardPage = () => (
  <div className="content-container">
    <WorkoutsSummary />
    <WorkoutListFilters />
    <WorkoutList />
  </div>
  
);

export default DashboardPage;