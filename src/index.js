const { databaseFunctions } = require('./databaseScripts')

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
databaseFunctions.createUserTable()
const user = databaseFunctions.getUser(username.value, password.value)
const newUser = databaseFunctions.addNewUser(username.value, password.value, 0)
console.log(newUser)
