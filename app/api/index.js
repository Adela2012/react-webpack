import axios from 'axios'

const baseUrl = '/api/'
// 首页
export const getHomeAd = () => axios.get(`${baseUrl}homead`)

export const getHomeList = (city, page) => axios.get(`${baseUrl}homelist/${encodeURIComponent(city)}/${page}`)
