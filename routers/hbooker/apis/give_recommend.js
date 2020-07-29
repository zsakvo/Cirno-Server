const get = require("../mixin/http").getHbooker;

let give_recommend = async function (book_id, count) {
  let res = await get({
    url: "/book/give_recommend",
    para: {
      book_id: book_id,
      count: count,
    },
  });
  return res;
};

module.exports = give_recommend;
