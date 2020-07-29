const Router = require("koa-router");
let hbooker = new Router();

const login = require("./apis/login");
const bookshelves = require("./apis/bookshelves");
const shelf_books = require("./apis/shelf_books");
const book_info = require("./apis/book_info");
const book_chapters = require("./apis/book_chapters");
const chapter_content = require("./apis/chapter_content");
const chapter_buy = require("./apis/chapter_buy");
const tsukkomi_num = require("./apis/tsukkomi_num");
const tsukkomi_list = require("./apis/tsukkomi_list");
const chapter_ifm = require("./apis/chapter_ifm");
const like_tsukkomi = require("./apis/like_tsukkomi");
const unlike_tsukkomi = require("./apis/unlike_tsukkomi");
const add_tsukkomi = require("./apis/add_tsukkomi");
const my_info = require("./apis/my_info");
const give_recommend = require("./apis/give_recommend");

hbooker
  .post("/login", async (ctx) => {
    let postData = ctx.request.body;
    let name = postData.name;
    let passwd = postData.passwd;
    let res = await login(name, passwd);
    ctx.body = res;
  })
  .get("/bookshelves", async (ctx) => {
    let res = await bookshelves();
    ctx.body = res;
  })
  .get("/shelf_books", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await shelf_books(ctx_query["shelf_id"]);
    ctx.body = res;
  })
  .get("/book_info", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await book_info(ctx_query["book_id"]);
    ctx.body = res;
  })
  .get("/book_chapters", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await book_chapters(ctx_query["book_id"]);
    ctx.body = res;
  })
  .get("/chapter_content", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await chapter_content(ctx_query["chapter_id"]);
    ctx.body = res;
  })
  .get("/chapter_buy", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await chapter_buy(ctx_query["chapter_id"]);
    ctx.body = res;
  })
  .get("/tsukkomi_num", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await tsukkomi_num(ctx_query["chapter_id"]);
    ctx.body = res;
  })
  .get("/tsukkomi_list", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await tsukkomi_list(
      ctx_query["chapter_id"],
      ctx_query["paragraph_index"],
      ctx_query["page"]
    );
    ctx.body = res;
  })
  .get("/chapter_ifm", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await chapter_ifm(ctx_query["chapter_id"]);
    ctx.body = res;
  })
  .get("/like_tsukkomi", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await like_tsukkomi(ctx_query["tsukkomi_id"]);
    ctx.body = res;
  })
  .get("/unlike_tsukkomi", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await unlike_tsukkomi(ctx_query["tsukkomi_id"]);
    ctx.body = res;
  })
  .post("/add_tsukkomi", async (ctx) => {
    let postData = ctx.request.body;
    let book_id = postData.book_id;
    let chapter_id = postData.chapter_id;
    let paragraph_index = postData.paragraph_index;
    let tsukkomi_content = postData.tsukkomi_content;
    let res = await add_tsukkomi(
      book_id,
      chapter_id,
      paragraph_index,
      tsukkomi_content
    );
    ctx.body = res;
  })
  .get("/my_info", async (ctx) => {
    let res = await my_info();
    ctx.body = res;
  })
  .get("/give_recommend", async (ctx) => {
    let ctx_query = ctx.query;
    let res = await give_recommend(ctx_query["book_id"], ctx_query["count"]);
    ctx.body = res;
  });

module.exports = hbooker;
