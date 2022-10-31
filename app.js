const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const engines = require('consolidate')
let url =
  'mongodb+srv://tshepomashiloane:1234@cluster0.yuwyjxq.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {
  useNewUrlParser: true,
})

app.set('views', __dirname + '/views')
app.engine('html', engines.mustache)
app.set('view engine', 'html')
app.use(express.static(__dirname + '/public'))
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.use('/images', express.static('./images'))
app.get('/', (_, res) => {
  res.render('index.ejs')
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

let mySchema = mongoose.Schema({
  username: 'String',
  email: 'String',
  password: 'String',
  score: 'String',
})
let userData = mongoose.model('Users', mySchema)

app.post('/sign_up', async (req, res) => {
  const info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password[0],
    passwordConfirmation: req.body.password[0],
    Score: 0,
  }
  let data = new userData(info)
  await data.save((error, result) => {
    if (error) {
      console.log('error: ' + error)
    } else {
      console.log(result)
    }
    res.render('games.ejs')
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
  console.log(`listening on http://localhost:${PORT}`)
})
userData.find({ username: 'tshepo' }, function (err, docs) {
  if (err) {
    console.log(err)
  } else {
    console.log('First function call : ', docs)
  }
})

// module.exports = {
//   info,
// }
