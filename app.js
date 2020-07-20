const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const hbookerApi = require("./apis/hbooker");

app.use(bodyParser());

//刺猬猫路由
let hbooker = new Router();
hbooker
  .get("/404", async (ctx) => {
    ctx.body = "404 page!";
  })
  .get("/helloworld", async (ctx) => {
    ctx.body = "helloworld page!";
  })
  .post("/login", async (ctx) => {
    let postData = ctx.request.body;
    let name = postData.name;
    let passwd = postData.passwd;
    let res = await hbookerApi.login(name, passwd);
    ctx.body = res;
  })
  .post("/demoPost", async (ctx) => {
    console.log(ctx);
    let postData = ctx.request.body;
    ctx.body = postData;
  })
  .get("/demoGet", async (ctx) => {
    let url = ctx.url;
    // 从上下文的 request 对象中获取
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    // 从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body = {
      url,
      req_query,
      req_querystring,
      ctx_query,
      ctx_querystring,
    };
  });

//装载子路由
let router = new Router();
router.use("/hbooker", hbooker.routes(), hbooker.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

//开始监听
app.listen(9096, () => {
  console.log("route-use-middleware is starting at port 9096");
});
