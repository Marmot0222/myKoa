// index.js
const Koa = require('./my-koa');
const Router = require('./router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.type = 'text/html;charset=utf-8';
  ctx.body = '首页';
});

router.get('/about', async (ctx) => {
  ctx.type = 'text/html;charset=utf-8';
  ctx.body = '关于我们';
});

router.post('/login', async (ctx) => {
  ctx.type = 'text/html;charset=utf-8';
  ctx.body = '模拟登录';
});

// 挂载路由中间件
app.use(router.routesMiddleware());

app.listen(3000, () => {
  console.log('服务启动：http://localhost:3000');
});
