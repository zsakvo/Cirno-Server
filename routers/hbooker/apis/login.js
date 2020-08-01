const get = require("../mixin/http").getHbooker;
const fs = require("fs");
const path = require("path");

let login = async function (name, passwd) {
  let res = await get({
    url: "/signup/login",
    para: {
      login_name: name,
      passwd: passwd,
    },
  });
  // delete res.success;
  if (res.success) {
    delete res.success;
    fs.writeFileSync(
      path.join(process.cwd(), ".token"),
      JSON.stringify({ hbooker: res }),
      "utf8"
    );
    allTokens.hbooker = res;
    res.success = true;
  } else {
    fs.writeFileSync(
      path.join(process.cwd(), ".token"),
      JSON.stringify({ hbooker: {} }),
      "utf8"
    );
    allTokens.hbooker = {};
  }
  return res;
};

module.exports = login;
