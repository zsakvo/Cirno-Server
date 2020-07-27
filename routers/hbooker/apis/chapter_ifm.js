const get = require("../mixin/http").getHbooker;
const post = require("../mixin/http").postHbooker;
const decrypt = require("../mixin/decrypt");

let chapter_key = async function (chapter_id) {
  let res = await get({
    url: "/chapter/get_chapter_cmd",
    para: {
      chapter_id: chapter_id,
    },
  });
  return res;
};

let content_clear = async function (chapter_id, chapter_command) {
  let res = await post({
    url: "/chapter/get_cpt_ifm",
    body: {
      chapter_id: chapter_id,
      chapter_command: chapter_command,
    },
  });
  return res;
};

let chapter_content = async function (chapter_id) {
  let key_res = await chapter_key(chapter_id);
  let result = {};
  if (key_res.success) {
    let key = key_res.data.command;
    let content_res = await content_clear(chapter_id, key);
    if (content_res.success) {
      result.success = true;
      result.data = content_res.data;
      result["data"]["chapter_info"]["txt_content"] = decrypt(
        content_res["data"]["chapter_info"]["txt_content"],
        key
      );
    }
  } else {
    result.success = false;
    result.tip = key_res.tip;
  }
  return result;
};

module.exports = chapter_content;
