import axios from 'axios'
import cache from 'memory-cache'

/**
 * 
 * @param {*} 
 * 请求方法基类
 */
const request = async ({
    url,
    data,
    params,
    method,
    headers,
    cacheOptions,
}) => {
    const requestConf = {
        url,
        method,
        data,
        params,
    }

    if (!url) throw Error('url must provide')

    // 根据hostName 切换不同的baseURL
    requestConf.url = url || 'http://localhost:3000'
    if (method.toUpperCase() === 'POST') {
        requestConf.headers = {
        'Content-Type': 'application/json;',
        ...headers,
        }
    } else {
        requestConf.headers = {
        ...headers,
        }
    }
    if (cacheOptions && cacheOptions.key) {
        const result = cache.get(cacheOptions.key)
        if (result) {
        const resData = JSON.parse(result)
        return new Promise((resolve) => {
            resolve(resData)
        })
        }
    }
    return await axios.request(requestConf).then(res => {
        if (handleRes(res)) {
        if (cacheOptions && cacheOptions.key) {
            cache.put(cacheOptions.key, JSON.stringify(res.data), cacheOptions.ttl || 300000)
        }
            return res.data
        }
  })
}
/**
 * 
 * @param {*} res 请求返回
 * 判断接口是否正常，如果异常则抛出
 */
function handleRes(res) {
  const { status, data: { code }, config } = res
  if ((status !== 200 && code !== 20000) ||(code !==200 && status !==200) ) {
    throw Error(JSON.stringify({
      url: config.url,
      method: config.method,
      data: config.data,
      'status': status,
      'response': res && res.data
    }))
  }
  return true
}
/**
 * 
 * @param {*} url  请求uri
 * @param {*} data 传入data
 */
const post = async (url, data) => {
  return request({
    url,
    data,
    method: 'POST',
  })
}
/**
 * 
 * @param {*} url  请求uri
 * @param {*} params 传入params
 */
// const get = async (url, params, cacheOptions) => {
const get = async (url, params, cacheOptions) => {
    return request({
        url,
        params,
        method: 'GET',
        cacheOptions,
    })
}
export default class Base {
  static get = get
  static post = post
  static cache = cache
}
