const decrypt = require("./decrypt");

let parse = function (res) {
  let clearRes = decrypt(res.trim());
  clearRes = clearRes.substr(0, clearRes.lastIndexOf("}") + 1);
  clearRes = JSON.parse(clearRes);
  return clearRes;
};

module.exports = parse;
