const Koa = require("koa");
const cors = require("koa2-cors");
const app = new Koa();
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const static = require("koa-static");
const fs = require("fs");
const open = require("open");

//允许跨域
app.use(cors());
app.use(bodyParser());

const staticPath = "/static";
app.use(static(path.join(__dirname, staticPath)));

//读取 tokens
allTokens = {};
let tokenExist = fs.existsSync(path.join(process.cwd(), "./.token"));
if (tokenExist) {
  let token = fs.readFileSync(path.join(process.cwd(), "./.token"), "utf8");
  allTokens = JSON.parse(token);
} else {
  allTokens = {};
}

//刺猬猫路由
const hbooker = require("./routers/hbooker");

//装载子路由
let router = new Router();
router.use("/hbooker", hbooker.routes(), hbooker.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

//开始监听
app.listen(9096, () => {
  console.log("程序启动成功，请在浏览器中访问 http://localhost:9096");
});

(async () => {
  await open("http://localhost:9096");
})();

module.exports = app;
