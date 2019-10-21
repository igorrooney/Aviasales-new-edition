import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/'
});

export const aviasalesAPI = {
  getSearchId() {
    return instance.get('search').then(res => res.data);
  },

  getTickets(id) {
    return instance.get(`tickets?searchId=${id}`).then(res => res.data);
  }
};
