const mongoose = require('mongoose')

const Article = require('./article')

mongoose.connect('mongodb://101.132.171.233:27017/test')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('open successfully');
});