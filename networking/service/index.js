import request from "../request"

export default class IndexApi extends request {
  // 首页-考期
  static async getExamPeriodList(params, host = 'BASEURL') {
    const url = host === 'MOCK' ? '/api/zikao/common/getExamPeriodList' : '/zikao/common/getExamPeriodList'
    // get参数 url, params, host = 'BASEURL'
    return await this.get(url, params, host)
  }
}
