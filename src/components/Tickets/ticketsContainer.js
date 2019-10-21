import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tickets from '.';
import {
  saveSearchId,
  saveTickets,
  setIsLoading,
  getSearchId,
  getTickets
} from '../../redux/tickets-reducer';

import Spinner from '../Spinner';

class TicketsContainer extends Component {
  componentDidMount() {
    this.props.getSearchId();
  }

  render() {
    if (!this.props.stop && this.props.searchId) {
      this.props.getTickets(this.props.searchId);
    }
    console.log(this.props.tickets);

    return !this.props.stop ? (
      <Spinner />
    ) : (
      <Tickets tickets={this.props.tickets} />
    );
  }
}
const mapStateToProps = state => {
  return {
    tickets: state.store.tickets,
    searchId: state.store.searchId,
    stop: state.store.stop
  };
};

export default connect(
  mapStateToProps,
  { saveSearchId, saveTickets, setIsLoading, getSearchId, getTickets }
)(TicketsContainer);
