import axios from '@/axios.js'

var api = {
    searchHotWords(params) {
        return axios.get('/api/meituan/header/searchHotWords.json', params);
    },
    getSearchList() {
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json')
    },
    resultsByKeywords() {
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    getProductsList() {
        return axios.get('/api/meituan/list/goodsList.json')
    },
    classify() {
        return axios.get('/api/meituan/list/classify.json')
    },
    areaList() {
        return axios.get('/api/meituan/list/areaList.json')
    },
    getHot() {
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecents() {
        return axios.get('/api/meituan/city/recents.json')
    },
    getProvince() {
        return axios.get('/api/meituan/city/province.json')
    },
    getPosition() {
        return axios.get('/api/meituan/city/getPosition.json')
    },
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json')
    },
    login(params) {
        return axios.get('/api/meituan/login', params)
    },
    register(params) {
        return axios.get('/api/meituan/register', params)
    }
}

export default api