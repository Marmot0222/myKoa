const MyKoa = require('./my-koa');
const app = new MyKoa();

app.use(async (ctx, next) => {
  console.log('👣 middleware 1');
  await next();
  console.log('👣 middleware 1 after');
});

app.use(async (ctx, next) => {
  console.log('👣 middleware 2');
  ctx.body = { message: 'Hello from MyKoa!' };
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
