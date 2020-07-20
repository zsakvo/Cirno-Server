const get = require("../mixin/http").getHbooker;

let bookshelves = async function () {
  let res = await get({
    url: "/bookshelf/get_shelf_list",
    para: {},
  });
  return res;
};

module.exports = bookshelves;
