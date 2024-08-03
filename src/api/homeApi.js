import request from '../utils/axios.js'

//首页tabbar
export function getTabbarList(query) {
    return request({
        url: '/api/tabbar/list',
        method: 'get',
        params: query
    });
}