import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8c700.firebaseio.com/'
});

export default instance;