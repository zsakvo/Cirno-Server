const parse = require("../mixin/parse-res");
const get = require("../../../libs/http").get;
const fix = require("../mixin/fix-param");

let login = async function (name, passwd) {
  let res = await get({
    url: fix.url + "/signup/login",
    para: Object.assign(
      {
        login_name: name,
        passwd: passwd,
      },
      fix.params
    ),
  });
  let clearRes = parse(res);
  return clearRes;
};

module.exports = login;
