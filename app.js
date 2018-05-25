const Koa = require('koa')
const Article = require('./models/article')
const dbInit = require('./models/index')

const app = new Koa()
app.use(async (ctx, next) => {
  await next()
  console.log('ctx.request:', ctx.request)
  var result;
  // var testArticle = new Article({
  //   title: 'String',
  //   content: 'String'
  // })
  // await testArticle.save((err, x_result) => {
  //   if (err) return console.error(err);
  //   console.log(x_result);
  // })
  await Article.find((err, _result) => {
    if (err) return console.error(err);
    result = _result;
    console.log('find articles', result);
  });
  ctx.response.body = result;
})

app.listen(8877)
console.log('app running...')
