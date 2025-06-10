// router.js
class Router {
  constructor() {
    this.routes = [];
  }

  register(method, path, handler) {
    this.routes.push({ method, path, handler });
  }

  get(path, handler) {
    this.register('GET', path, handler);
  }

  post(path, handler) {
    this.register('POST', path, handler);
  }

  // 生成中间件函数供 app.use 使用
  routesMiddleware() {
    return async (ctx, next) => {
      const { method, path } = ctx;

      const route = this.routes.find(
        r => r.method === method && r.path === path
      );

      if (route) {
        await route.handler(ctx);
      } else {
        await next(); // 没匹配到路由就进入下一个中间件
      }
    };
  }
}

module.exports = Router;
