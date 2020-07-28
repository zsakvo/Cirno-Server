const post = require("../mixin/http").postHbooker;

let unlike_tsukkomi = async function (tsukkomi_id) {
  let res = await post({
    url: "/chapter/unlike_tsukkomi",
    para: {
      tsukkomi_id: tsukkomi_id,
    },
  });
  return res;
};

module.exports = unlike_tsukkomi;
