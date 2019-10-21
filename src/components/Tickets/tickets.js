import React from 'react';

// import classes from './tickets.module.scss';

import nextId from 'react-id-generator';

const Tickets = props => {
  return (
    <div>
      <ol>
        {props.tickets.map(ticket => (
          <li key={nextId()}>{ticket.price}</li>
        ))}
      </ol>
    </div>
  );
};

export default Tickets;
