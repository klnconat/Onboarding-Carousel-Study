import axios from 'axios';

export default {
  get(resources: string) {
    return axios.get(resources);
  },
};
