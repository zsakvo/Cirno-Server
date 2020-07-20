const get = require("../mixin/http").getHbooker;
const post = require("../mixin/http").postHbooker;

let book_division = async function (book_id) {
  let res = await get({
    url: "/book/get_division_list",
    para: {
      book_id: book_id,
    },
  });
  return res;
};

let division_chapters = async function (division_id) {
  let res = await post({
    url: "/chapter/get_updated_chapter_by_division_id",
    body: {
      division_id: division_id,
      last_update_time: 0,
    },
  });
  return res;
};

let book_chapters = async function (book_id) {
  let divisions_res = await book_division(book_id);
  let result = {};
  let chapters = [];
  if (divisions_res.success) {
    let division_list = divisions_res.data.division_list;
    for (let division of division_list) {
      let division_id = division["division_id"];
      let chapters_res = await division_chapters(division_id);
      if (chapters_res.success) {
        chapters.push(...chapters_res.data.chapter_list);
      } else {
        result.success = false;
        result.tip = `获取分卷 --${division.division_name}-- 失败`;
        break;
      }
    }
    console.log(chapters);
    result.success = true;
    result.data = chapters;
  } else {
    result.success = false;
    result.tip = divisions_res.tip;
  }
  return result;
};

module.exports = book_chapters;
