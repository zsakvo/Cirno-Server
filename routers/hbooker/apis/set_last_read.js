const get = require("../mixin/http").getHbooker;

let set_last_read = async function (book_id, last_read_chapter_id) {
  let res = await get({
    url: "/bookshelf/set_last_read_chapter",
    para: {
      book_id: book_id,
      last_read_chapter_id: last_read_chapter_id,
    },
  });
  return res;
};

module.exports = set_last_read;
