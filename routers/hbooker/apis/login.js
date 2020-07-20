const parse = require("../mixin/parse-res");
const get = require("../mixin/http").getHbooker;
const fix = require("../mixin/fix-param");
const fs = require("fs");

let login = async function (name, passwd) {
  let res = await get({
    url: fix.url + "/signup/login",
    para: {
      login_name: name,
      passwd: passwd,
    },
  });
  let clearRes = parse(res);
  let token = {};
  if (clearRes.code === 100000) {
    token.success = true;
    token.login_token = clearRes.data.login_token;
    token.account = clearRes.data.reader_info.account;
    fs.writeFileSync(".token", JSON.stringify({ hbooker: token }), "utf8");
    allTokens.hbooker = token;
  } else {
    token.success = false;
    token.tip = clearRes.tip;
  }
  return token;
};

module.exports = login;
