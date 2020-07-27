const post = require("../mixin/http").postHbooker;

let like_tsukkomi = async function (tsukkomi_id) {
  let res = await post({
    url: "/chapter/like_tsukkomi",
    para: {
      tsukkomi_id: tsukkomi_id,
    },
  });
  return res;
};

module.exports = like_tsukkomi;
