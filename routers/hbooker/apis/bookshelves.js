const parse = require("../mixin/parse-res");
const get = require("../mixin/http").getHbooker;
const fix = require("../mixin/fix-param");

let bookshelves = async function () {
  let res = await get({
    url: fix.url + "/bookshelf/get_shelf_list",
    para: {},
  });
  let clearRes = parse(res);
  return clearRes;
};

module.exports = bookshelves;
