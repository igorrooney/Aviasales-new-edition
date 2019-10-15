import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tickets from '.';
import {
  searchIdActionCreator,
  getTicketsActionCreator
} from '../../redux/tickets-reducer';
import * as axios from 'axios';

class TicketsContainer extends Component {
  componentDidMount() {
    axios
      .get('https://front-test.beta.aviasales.ru/search')
      .then(res => this.props.saveSearchId(res.data.searchId));
  }

  render() {
    if (!this.props.allTickets.stop && this.props.allTickets.searchId) {
      axios
        .get(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.allTickets.searchId}`
        )
        .then(res => this.props.saveTickets(res.data.tickets, res.data.stop));
    }

    console.log(this.props.allTickets.tickets);

    return <Tickets allTickets={this.props.allTickets.tickets} />;
  }
}
const mapStateToProps = state => {
  return { allTickets: state.store };
};

const mapDispatchToProps = dispatch => {
  return {
    saveSearchId: searchId => dispatch(searchIdActionCreator(searchId)),
    saveTickets: (tickets, stop) =>
      dispatch(getTicketsActionCreator(tickets, stop))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsContainer);
