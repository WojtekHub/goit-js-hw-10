import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_QUnYhoIIZ2iqSH1mMjHpmwZHgYxNsyjFwa9MAjS1zqQs3TlVZsMf19aZ3nDB8zDU';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get('/breeds').then(({ data }) => data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`images/search?breed_ids=${breedId}`)
    .then(({ data }) => data);
}
