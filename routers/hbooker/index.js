const Router = require("koa-router");
let hbooker = new Router();

const login = require("./apis/login");
const bookshelves = require("./apis/bookshelves");

// allTokens.hbooker ? null : (allTokens.hbooker = {});

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
  });

module.exports = hbooker;
