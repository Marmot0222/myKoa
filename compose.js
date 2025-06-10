function compose(middlewares) {
  if (!Array.isArray(middlewares)) {
    throw new TypeError('Middleware stack must be an array!');
  }

  return function (ctx) {
    let index = -1;

    return dispatch(0);

    function dispatch(i, err) {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'));
      }

      index = i;

      if (i >= middlewares.length) {
        return err ? Promise.reject(err) : Promise.resolve();
      }

      const fn = middlewares[i];

      try {
        // 区分是错误处理中间件还是正常中间件
        if (err) {
          // 错误处理中间件必须是 3 个参数
          if (fn.length === 3) {
            return Promise.resolve(fn(err, ctx, (e) => dispatch(i + 1, e)));
          }
        } else {
          if (fn.length < 3) {
            return Promise.resolve(fn(ctx, (e) => dispatch(i + 1, e)));
          }
        }

        // 跳过当前中间件，尝试找下一个合适的处理器
        return dispatch(i + 1, err);
      } catch (e) {
        return dispatch(i + 1, e);
      }
    }
  };
}

module.exports = compose;
