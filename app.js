const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");

//读取 tokens
allTokens = {};
let tokenExist = fs.existsSync(".token");
if (tokenExist) {
  let token = fs.readFileSync("./.token", "utf8");
  allTokens = JSON.parse(token);
} else {
  allTokens = {};
}

const hbooker = require("./routers/hbooker");
app.use(bodyParser());

//装载子路由
let router = new Router();
router.use("/hbooker", hbooker.routes(), hbooker.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

//开始监听
app.listen(9096, () => {
  console.log("route-use-middleware is starting at port 9096");
});

module.exports = app;
