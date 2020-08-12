import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(config => {
    console.log(config);
    config.params = {
        ...config.params,
        appkey: "15757777934_1554791990998"
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axios;