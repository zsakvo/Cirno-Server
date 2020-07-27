const post = require("../mixin/http").postHbooker;

let add_tsukkomi = async function (
  book_id,
  chapter_id,
  paragraph_index,
  tsukkomi_content
) {
  let res = await post({
    url: "/chapter/like_tsukkomi",
    para: {
      book_id: book_id,
      chapter_id: chapter_id,
      paragraph_index: paragraph_index,
      tsukkomi_content: tsukkomi_content,
    },
  });
  return res;
};

module.exports = add_tsukkomi;
