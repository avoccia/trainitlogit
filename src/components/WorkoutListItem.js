import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const WorkoutListItem = ({id, description, time, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(time * 60).format('00:00:00')} 
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default WorkoutListItem;