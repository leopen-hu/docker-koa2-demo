const mongoose = require('mongoose')

const Article = require('./article')

mongoose.connect('mongodb://127.0.0.1/test')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('open successfully');
});