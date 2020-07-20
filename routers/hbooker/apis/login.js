const get = require("../mixin/http").getHbooker;
const fs = require("fs");

let login = async function (name, passwd) {
  let res = await get({
    url: "/signup/login",
    para: {
      login_name: name,
      passwd: passwd,
    },
  });
  delete res.success;
  console.log(res);
  fs.writeFileSync(".token", JSON.stringify({ hbooker: res }), "utf8");
  allTokens.hbooker = res;
  return res;
};

module.exports = login;
