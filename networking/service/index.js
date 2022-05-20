import request from "../request"
import { BASEURLS } from '../../config/constant'

export default class IndexApi extends request {
  // 首页-考期
  static async getExamPeriodList(params) {
    // get参数 url, params
    console.log(process.env.NEXT_ENV,  'BASEURLS[process.env.APP_ENV]')
    const url = `${BASEURLS[process.env.NEXT_ENV] || ''}/zikao/common/getExamPeriodList`
    console.log('url=====', url)
    return await this.get(url, params)
  }
}
