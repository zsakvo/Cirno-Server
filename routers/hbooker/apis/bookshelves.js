const parse = require("../mixin/parse-res");
const get = require("../../../libs/http").get;
const fix = require("../mixin/fix-param");

let login = async function () {
  let res = await get({
    url: fix.url + "/bookshelf/get_shelf_list",
    para: fix.params,
  });
  let clearRes = parse(res);
  return clearRes;
};

module.exports = login;
