import { connect } from 'react-redux';
import Tickets from '.';
import {
  searchIdActionCreator,
  getTicketsActionCreator
} from '../../redux/tickets-reducer';

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

const ticketsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets);

export default ticketsContainer;
