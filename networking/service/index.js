import request from "../request"

export default class IndexApi extends request {
  // 首页-考期
  static async getExamPeriodList(params) {
    // get参数 url, params
    console.log(params);
    return await this.get('/api/zikao/common/getExamPeriodList', params)
  }
}
