const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')

let schema = mongoose.Schema
let url =
  'mongodb+srv://tshepomashiloane:1234@cluster0.yuwyjxq.mongodb.net/?retryWrites=true&w=majority'
// mongoapi = https://data.mongodb-api.com/app/data-syjde/endpoint/data/v1

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

let userData = mongoose.model('Users', mySchema)

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  let info = {
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
    // res.send('./public/games.html')
  })
})

app.listen(3000, (req, res) => {
  console.log('listening on http://localhost:3000')
})

// curl --location --request POST 'https://data.mongodb-api.com/app/data-syjde/endpoint/data/v1/action/insertOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: https://data.mongodb-api.com/app/data-syjde/endpoint/data/v1' \
// --data-raw '{
//     "collection":"Users",
//     "database":"DaVinciUsers",
//     "dataSource":"Cluster0",
//     "document": {
//       "status": "open",
//       "text": "Do the dishes"
//     }
// }'

// var axios = require('axios');
// var data = JSON.stringify({
//     "collection": "<COLLECTION_NAME>",
//     "database": "<DATABASE_NAME>",
//     "dataSource": "Cluster0",
//     "projection": {
//         "_id": 1
//     }
// });

// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-syjde/endpoint/data/v1/action/findOne',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': '<API_KEY>',
//     },
//     data: data
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
