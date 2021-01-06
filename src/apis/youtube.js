import axios from 'axios';

const KEY = 'AIzaSyCu9I-braQwfuW8n9mYyaB_loqwUPH5QYs';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type:'video'
    }
});
