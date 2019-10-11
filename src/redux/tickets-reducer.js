const SEARCH_ID = 'SEARCH_ID';
const SAVE_TICKETS = 'GET_TICKETS';

const initialState = {
  tickets: [],
  searchId: '',
  stop: false
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ID:
      return {
        ...state,
        searchId: action.searchId
      };

    case SAVE_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
        stop: action.stop
      };
    default:
      return state;
  }
};

export const searchIdActionCreator = searchId => ({
  type: SEARCH_ID,
  searchId
});

export const getTicketsActionCreator = (tickets, stop) => ({
  type: SAVE_TICKETS,
  tickets,
  stop
});

export default ticketsReducer;
