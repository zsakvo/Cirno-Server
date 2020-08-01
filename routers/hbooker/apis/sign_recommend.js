const get = require("../mixin/http").getHbooker;

let sign_recommend = async function () {
  let res = await get({
    url: "/reader/get_task_bonus_with_sign_recommend",
    para: {
      task_type: 1,
    },
  });
  return res;
};

module.exports = sign_recommend;
