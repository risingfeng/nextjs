import request from "../request"

export default class IndexApi extends request {
  // 首页-考期

  static async getExamPeriodList(params, host = 'BASEURL') {
    const url = '/zikao/common/getExamPeriodList'
    // get参数 url, params, host = 'BASEURL'
    return await this.get(url, params, host)
  }
}
