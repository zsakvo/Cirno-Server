const get = require("../mixin/http").getHbooker;

let tsukkomi_list = async function (chapter_id, paragraph_index) {
  let res = await get({
    url: "/chapter/get_paragraph_tsukkomi_list_new",
    para: {
      chapter_id: chapter_id,
      paragraph_index: paragraph_index,
    },
  });
  return res;
};

module.exports = tsukkomi_list;
