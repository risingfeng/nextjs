import request from "../request";

export default class IndexApi extends request {
  // 首页-banner
  static async getBanner(params) {
    const url = "/gw/banner/homePage"
    return await this.get(url, params)
  }
}
