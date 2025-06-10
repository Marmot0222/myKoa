// response.js
module.exports = {
  get status() {
    return this.res.statusCode;
  },
  set status(code) {
    this.res.statusCode = code;
  },
  get body() {
    return this._body;
  },
  set body(value) {
    this._body = value;
  },
  set type(type) {
    this.res.setHeader('Content-Type', type);
  },
  get type() {
    return this.res.getHeader('Content-Type');
  },
  set headers(headers) {
    for (const key in headers) {
      this.res.setHeader(key, headers[key]);
    }
  },
  setHeader(key, val) {
    this.res.setHeader(key, val);
  },
  getHeader(key) {
    return this.res.getHeader(key);
  }
};
