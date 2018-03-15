const Koa = require('koa')

const Article = require('./models/article')

const app = new Koa()

app.use(async (ctx, next) => {
  await next()
  console.log('ctx.request:', ctx.request)
  var result;
  await Article.find((err, _result) => {
    result = _result;
    console.log(result);
  });
  ctx.response.body = result;
})

app.listen(8877)
console.log('app running...')
