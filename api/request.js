import config from '@/config'
/**
 * 创建请求
 * @param {String} url
 * @param {String} method
 * @param {Object} data
 */
export default function (url, method, data = {}) {
  uni.request({
    url: config.apiUrl + url,
    method,
    data,
  })
  .then(res => {
    return res
  })
  .catch (err => {
    return err
  })
}
