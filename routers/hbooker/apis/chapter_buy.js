const get = require("../mixin/http").getHbooker;

let chapter_buy = async function (chapter_id) {
  let res = await get({
    url: "/chapter/buy",
    para: {
      chapter_id: chapter_id,
    },
  });
  return res;
};

module.exports = chapter_buy;
