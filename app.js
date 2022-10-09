const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

let schema = mongoose.Schema;
let url =
  "mongodb+srv://tshepomashiloane:1234@cluster0.yuwyjxq.mongodb.net/?retryWrites=true&w=majority";
// mongoapi = https://data.mongodb-api.com/app/data-syjde/endpoint/data/v1

mongoose.connect(url, {
  useNewUrlParser: true,
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//create schema object

let mySchema = mongoose.Schema({
  username: "String",
  email: "String",
  password: "String",
});

let userData = mongoose.model("Users", mySchema);

app.use("/images", express.static("./images"));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/games", (_, res) => {
  res.sendFile(__dirname + "/public/games.html");
});

app.get("/history", (_, res) => {
  res.sendFile(__dirname + "/public/history.html");
});

app.get("/learn_more", (_, res) => {
  res.sendFile(__dirname + "/public/learn_more.html");
});

app.get("/style.css", (_, res) => {
  res.sendFile(__dirname + "/public/style.css");
});

app.post("/", (req, res) => {
  let info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password[0],
    passwordConfirmation: req.body.password[0],
  };
  console.log(info);
  let data = new userData(info);
  data.save((error) => {
    if (error) {
      console.log("error: " + error);
    } else {
      console.log("Successfully saved");
    }
    // res.send('./public/games.html')
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`listening on http://localhost:${PORT}`);
});

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
