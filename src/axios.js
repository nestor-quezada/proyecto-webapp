import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dsm-react.firebaseio.com/'
});

export default instance;