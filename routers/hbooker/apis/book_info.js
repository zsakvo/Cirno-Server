const get = require("../mixin/http").getHbooker;

let book_info = async function (book_id) {
  let res = await get({
    url: "/book/get_info_by_id",
    para: {
      book_id: book_id,
    },
  });
  return res;
};

module.exports = book_info;
