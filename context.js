module.exports = {
  // 通过代理，把 ctx 的属性直接映射到 ctx.response 和 ctx.request 上
  get method() {
    return this.request.method;
  },
  get url() {
    return this.request.url;
  },
  get path() {
    return this.request.path;
  },
  get query() {
    return this.request.query;
  },

  get status() {
    return this.response.status;
  },
  set status(code) {
    this.response.status = code;
  },
  get body() {
    return this.response.body;
  },
  set body(val) {
    this.response.body = val;
  },

  get type() {
    return this.response.type;
  },
  set type(val) {
    this.response.type = val;
  },

  set headers(val) {
    this.response.headers = val;
  },
  setHeader(key, val) {
    this.response.setHeader(key, val);
  }
};
