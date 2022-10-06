const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')

let schema = mongoose.Schema
let url =
  'mongodb+srv://tshepomashiloane:<password>@cluster0.yuwyjxq.mongodb.net/test'

mongoose.connect(url, {
  useNewUrlParser: true,
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

//create schema object

let mySchema = mongoose.Schema({
  username: 'String',
  email: 'String',
  password: 'String',
})

let userData = mongoose.model('Scores', mySchema)

app.get('/', (req, res) => {
  app.render('index')
})
app.post('/', (req, res) => {
  let info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  let data = new userData(info)
  app.save((error) => {
    if (error) {
      console.log('error: ' + error)
    } else {
      console.log('Successfully saved')
    }
    res.send('./public/games.html')
  })
})

app.listen(3000, (req, res) => {
  console.log('listening on http://localhost:3000')
})
