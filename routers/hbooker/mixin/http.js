const get = require("../../../libs/http").get;
const post = require("../../../libs/http").post;
const fix = require("../mixin/fix-param");

let getHbooker = function (options) {
  options.para = Object.assign({}, options.para, fix.params, allTokens.hbooker);
  return get(options);
};

let postHbooker = function (obj) {
  options.body = Object.assign({}, options.body, fix.params, allTokens.hbooker);
  return post(obj);
};

let http = {
  getHbooker,
  postHbooker,
};

module.exports = http;
