import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const LeaderboardListItem = ({id}) => (
    <div>
      <h3>{id}</h3>
    </div> 
);

export default LeaderboardListItem;