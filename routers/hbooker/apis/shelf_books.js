const get = require("../mixin/http").getHbooker;

let shelfBooks = async function (shelf_id) {
  let res = await get({
    url: "/bookshelf/get_shelf_book_list_new",
    para: {
      count: 9999,
      shelf_id: shelf_id,
      page: 0,
      order: "last_read_time",
    },
  });
  return res;
};

module.exports = shelfBooks;
