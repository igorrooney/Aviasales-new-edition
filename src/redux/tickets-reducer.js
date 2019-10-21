import { aviasalesAPI } from '../api/aviasales_API';

const SEARCH_ID = 'SEARCH_ID';
const SAVE_TICKETS = 'GET_TICKETS';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
  tickets: [],
  searchId: '',
  stop: false,
  isLoading: false
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

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};

export const saveSearchId = searchId => ({ type: SEARCH_ID, searchId });

export const saveTickets = (tickets, stop) => ({
  type: SAVE_TICKETS,
  tickets,
  stop
});

export const setIsLoading = isLoading => ({ type: SET_IS_LOADING, isLoading });

export const getSearchId = () => {
  return dispatch => {
    dispatch(setIsLoading(true));
    aviasalesAPI
      .getSearchId()
      .then(data => dispatch(saveSearchId(data.searchId)));
    dispatch(setIsLoading(false));
  };
};

export const getTickets = searchId => {
  return dispatch => {
    aviasalesAPI
      .getTickets(searchId)
      .then(data => dispatch(saveTickets(data.tickets, data.stop)));
  };
};

export default ticketsReducer;
