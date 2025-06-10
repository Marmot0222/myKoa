// request.js
module.exports = {
  get url() {
    return this.req.url;
  },
  get path() {
    const url = this.req.url || '';
    return url.split('?')[0];
  },
  get method() {
    return this.req.method;
  },
  get query() {
    const url = this.req.url || '';
    const querystring = require('querystring');
    return querystring.parse(url.split('?')[1]);
  },
  get headers() {
    return this.req.headers;
  },
  get host() {
    return this.req.headers.host;
  },
  get protocol() {
    return this.req.connection.encrypted ? 'https' : 'http';
  }
};
