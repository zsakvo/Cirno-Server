const parse = require("../mixin/parse-res");
const get = require("../../../libs/http").get;
const fix = require("../mixin/fix-param");

let bookshelves = async function () {
  let res = await get({
    url: fix.url + "/bookshelf/get_shelf_list",
    para: Object.assign(
      fix.params,
      global.token && global.token.hbooker ? global.token.hbooker : {}
    ),
  });
  let clearRes = parse(res);
  return clearRes;
};

module.exports = bookshelves;
