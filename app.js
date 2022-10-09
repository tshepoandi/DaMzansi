const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

let schema = mongoose.Schema
let url =
  'mongodb+srv://tshepomashiloane:1234@cluster0.yuwyjxq.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, {
  useNewUrlParser: true,
})
let engines = require('consolidate')

app.set('views', __dirname + '/views')
app.engine('html', engines.mustache)
app.set('view engine', 'html')

app.use(express.static(__dirname + '/public'))

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

let mySchema = mongoose.Schema({
  username: 'String',
  email: 'String',
  password: 'String',
})

let userData = mongoose.model('Users', mySchema)

app.use('/images', express.static('./images'))

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/games', (_, res) => {
  res.sendFile(__dirname + '/public/games.html')
})

app.get('/history', (_, res) => {
  res.sendFile(__dirname + '/public/history.html')
})

app.get('/learn_more', (_, res) => {
  res.sendFile(__dirname + '/public/learn_more.html')
})

app.get('/style.css', (_, res) => {
  res.sendFile(__dirname + '/public/style.css')
})

app.get('/sign_up', (_, res) => {
  res.render(__dirname + '/views/sign_up.ejs')
})

let info
app.post('/sign_up', (req, res) => {
  info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password[0],
    passwordConfirmation: req.body.password[0],
  }
  console.log(info)
  let data = new userData(info)
  data.save((error) => {
    if (error) {
      console.log('error: ' + error)
    } else {
      console.log('Successfully saved')
    }
    res.render('games.ejs')
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, (req, res) => {
  console.log(`listening on http://localhost:${PORT}`)
})

module.exports = {
  info,
}
