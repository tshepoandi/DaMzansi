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
    return result.rows
  },
  getUser: async (username, password) => {
    const result = await pool.query(
      `select * from USERS where username=$1 and password=$2`,
      [username, password],
    )
    return result.rows[0]
  },
  updateScore: async (newScore, id) => {
    return await pool.query(`update USERS set score = $1 where id = $2`, [
      newScore,
      id,
    ])
  },
}

// databaseFunctions.createUserTable().then((data) => console.log(data))
// databaseFunctions.addNewUser('blammy', '808').then((data) => {
//   console.log(data)
// })
// databaseFunctions
//   .getUser('blammy', '808')
//   .catch((error) => {
//     console.log(error)
//   })
//   .then((data) => {
//     console.log(data)
//   })
databaseFunctions
  .updateScore(20, 1)
  .catch((hands) => {
    console.log(hands)
  })
  .then((data) => {
    console.log(data)
  })
