import axios from 'axios';

class DataFetcherService {
  getData(url, params = null) {
    return params ? axios.get(url, { params }) : axios.get(url);
  }

  sendData(url, params) {
    return axios.post(url, params);
  }
}

export default new DataFetcherService();
