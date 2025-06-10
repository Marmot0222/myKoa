const http = require("http");
const compose = require("./compose");
const context = require("./context");
const requestProto = require('./request');
const responseProto = require('./response');

class MyKoa {
	constructor() {
		this.middlewares = [];
	}

	use(fn) {
		this.middlewares.push(fn);
	}

	listen(...args) {
		const server = http.createServer(async (req, res) => {
			const ctx = this.createContext(req, res);
			const fnMiddleware = compose(this.middlewares);

			try {
				await fnMiddleware(ctx); // 洋葱执行
				this.respond(ctx);
			} catch (err) {
				this.handleError(err, ctx);
			}
		});

		server.listen(...args);
	}

	createContext(req, res) {
		const ctx = Object.create(context);

		ctx.req = req;
		ctx.res = res;

		ctx.request = Object.create(requestProto);
		ctx.response = Object.create(responseProto);

		ctx.request.req = req;
		ctx.response.res = res;

		return ctx;
	}

	respond(ctx) {
		const res = ctx.res;
		const body = ctx.body;
		if (typeof body === "string" || Buffer.isBuffer(body)) {
			res.end(body);
		} else if (typeof body === "object") {
			res.setHeader("Content-Type", "application/json");
			res.end(JSON.stringify(body));
		} else {
			res.end("Not Found");
		}
	}

	handleError(err, ctx) {
		ctx.res.statusCode = 500;
		ctx.res.end("Internal Server Error: " + err.message);
	}
}

module.exports = MyKoa;
