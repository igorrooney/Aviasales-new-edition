import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tickets from '.';
import {
  saveSearchId,
  saveTickets,
  setIsLoading
} from '../../redux/tickets-reducer';
import * as axios from 'axios';
import Spinner from '../Spinner';

class TicketsContainer extends Component {
  componentDidMount() {
    this.props.setIsLoading(true);
    axios.get('https://front-test.beta.aviasales.ru/search').then(res => {
      this.props.setIsLoading(false);
      this.props.saveSearchId(res.data.searchId);
    });
  }

  render() {
    if (!this.props.allTickets.stop && this.props.allTickets.searchId) {
      axios
        .get(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.allTickets.searchId}`
        )
        .then(res => {
          this.props.saveTickets(res.data.tickets, res.data.stop);
        });
    }

    console.log(this.props.allTickets.tickets);

    return !this.props.allTickets.stop ? (
      <Spinner />
    ) : (
      <Tickets allTickets={this.props.allTickets.tickets} />
    );
  }
}
const mapStateToProps = state => {
  return { allTickets: state.store };
};

// const mapDispatchToProps = dispatch => {   return {     saveSearchId:
// searchId => dispatch(searchIdActionCreator(searchId)),     saveTickets:
// (tickets, stop) =>       dispatch(getTicketsActionCreator(tickets, stop)),
//  setIsLoading: isLoading => dispatch(setIsLoadingActionCreator(isLoading))
// }; };

export default connect(
  mapStateToProps,
  { saveSearchId, saveTickets, setIsLoading }
)(TicketsContainer);
