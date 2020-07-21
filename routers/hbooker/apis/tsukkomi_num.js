const get = require("../mixin/http").getHbooker;

let tsukkomi_num = async function (chapter_id) {
  let res = await get({
    url: "/chapter/get_tsukkomi_num",
    para: {
      chapter_id: chapter_id,
    },
  });
  return res;
};

module.exports = tsukkomi_num;
