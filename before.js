  const koa = require('koa')
  const fs = require('fs')
  const Router = require ('koa-router')
  const pathLib = require('path')
  const app = new koa()
  app.listen(8081)
  const router = new Router()
  app.use(router.routes())
  .use(router.allowedMethods())
  router.all('/:apiName',(ctx,next)=>{
    let apiData = JSON.parse(fs.readFileSync(pathLib.resolve('./db.json'),'utf8'))[ctx.params.apiName]
    ctx.body = apiData
  })
