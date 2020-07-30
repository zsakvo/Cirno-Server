const parse = require("./parse_res");
const qs = require("qs");
const get = require("../../../libs/http").get;
const post = require("../../../libs/http").post;
const fix = require("./fix_param");
let getHbooker = function (options) {
  options.url = fix.url + options.url;
  options.para = Object.assign({}, options.para, fix.params, allTokens.hbooker);
  return get(options).then(
    (res) => {
      let clearRes = parse(res);
      let result = {};
      if (clearRes.code == 100000) {
        result.success = true;
        if (options.url === fix.url + "/signup/login") {
          result.login_token = clearRes.data.login_token;
          result.account = clearRes.data.reader_info.account;
          result.reader_id = clearRes.data.reader_info.reader_id;
        } else {
          result.data = clearRes.data;
        }
        return result;
      } else {
        result.success = false;
        result.tip = clearRes.tip;
        result.code = clearRes.code;
        return result;
      }
    },
    (err) => {
      let result = {};
      result.success = false;
      result.tip = err.message;
      result.code = 0;
      return result;
    }
  );
};

let postHbooker = function (options) {
  options.url = fix.url + options.url;
  let json = Object.assign({}, options.body, fix.params, allTokens.hbooker);
  let formData = qs.stringify(json);
  options.body = formData;
  options.headers = {
    "User-Agent": "Android  com.kuangxiangciweimao.novel  fake_server_by_koa",
  };
  return post(options).then(
    (res) => {
      let clearRes = parse(res);
      let result = {};
      if (clearRes.code == 100000) {
        result.success = true;
        result.data = clearRes.data;
        return result;
      } else {
        result.success = false;
        result.tip = clearRes.tip;
        result.code = clearRes.code;
        return result;
      }
    },
    (err) => {
      let result = {};
      result.success = false;
      result.tip = err.message;
      result.code = 0;
      return result;
    }
  );
};

let http = {
  getHbooker,
  postHbooker,
};

module.exports = http;
