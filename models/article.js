const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = Schema({
  title: String,
  content: String
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
