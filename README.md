# mini-koa

## 目录结构

my-koa/
├── my-koa.js ← 主类
├── context.js ← ctx 封装
├── request.js ← ctx.request
├── response.js ← ctx.response
├── compose.js ← 中间件调度器
└── index.js ← 入口 demo（测试代码）

## 模拟结构关系图（简化版）

MyKoa
├── ctx
│ ├── req → Node 原生 req
│ ├── res → Node 原生 res
│ ├── request → 封装 request.js
│ ├── response → 封装 response.js

## 运行

node index.js
