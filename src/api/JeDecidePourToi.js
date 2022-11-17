import axios from 'axios';

export default axios.create({
  baseURL: 'https://je-decide-pour-toi-staging.herokuapp.com/api/v1',
});
