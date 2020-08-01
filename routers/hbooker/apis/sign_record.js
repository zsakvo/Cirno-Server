const get = require("../mixin/http").getHbooker;

let sign_record = async function () {
  let res = await get({
    url: "/task/get_sign_record",
    para: {},
  });
  return res;
};

module.exports = sign_record;
