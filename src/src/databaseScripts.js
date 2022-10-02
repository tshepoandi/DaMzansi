const { pool } = require('./config.js')
const { queries } = require('./databaseQueries.js')
const databaseFunctions = {
  createUserTable: async () => {
    await pool.query(`create table if not exists USERS (
	    ID serial,
	    USERNAME varchar(50) not null,
        PASSWORD varchar(50) not null,
        SCORE int not null
    );`)
    return 'Table created successfully'
  },
  addNewUser: async (username, password) => {
    const result = await pool.query(queries.addNewUser, [username, password, 0])
    return result
  },
}

databaseFunctions.createUserTable().then((data) => console.log(data))
databaseFunctions.addNewUser('Tshepo', '123456').then((data) => {
  console.log(data)
})
