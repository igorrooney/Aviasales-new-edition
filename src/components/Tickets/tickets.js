import React from 'react';

import classes from './tickets.module.scss';
import Axios from 'axios';
import nextId from 'react-id-generator';

const Tickets = props => {
  if (!props.allTickets.searchId) {
    Axios.get('https://front-test.beta.aviasales.ru/search').then(res => {
      props.saveSearchId(res.data.searchId);
    });
  }

  if (!props.allTickets.stop && props.allTickets.searchId) {
    Axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${props.allTickets.searchId}`
    ).then(res => props.saveTickets(res.data.tickets, res.data.stop));
  }
  console.log(props.allTickets.tickets);
  return (
    <ol>
      {props.allTickets.tickets.map(item => (
        <li key={nextId()}>{item.price}</li>
      ))}
    </ol>
  );
};

export default Tickets;
