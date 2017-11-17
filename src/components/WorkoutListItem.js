import React from 'react';
import {Link} from 'react-router-dom';

const WorkoutListItem = ({id, description, time, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{time} - {createdAt}</p>
  </div>
);

export default WorkoutListItem;