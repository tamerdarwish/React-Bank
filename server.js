var bodyParser = require('body-parser')
var express = require('express')
const path = require('path')
var app = express()
var mongoose = require('mongoose')
var transactionsResults = require('./model/Transaction')
const api = require('./server/routes/api')

app.use('/', api)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})





mongoose.connect("mongodb://127.0.0.1:27017/bankDB", {
  useNewUrlParser: true,
})
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))

const port = 3030
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

