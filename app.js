const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  await next()
  console.log('ctx.request:', ctx.request)
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello, Koa2!</h1>'
})

app.listen(8877)
console.log('app running...')
