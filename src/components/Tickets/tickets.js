import React from 'react';

import classes from './tickets.module.scss';

import nextId from 'react-id-generator';

const Tickets = props => {
  return (
    <div>
      <ol>
        {props.allTickets.map(item => (
          <li key={nextId()}>{item.price}</li>
        ))}
      </ol>
    </div>
  );
};

export default Tickets;
