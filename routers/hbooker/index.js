const Router = require("koa-router");
let hbooker = new Router();

const login = require("./apis/login");
const bookshelves = require("./apis/bookshelves");
const shelf_books = require("./apis/shelf_books");

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
  });

module.exports = hbooker;
