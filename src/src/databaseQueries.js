const queries = {
  createUserTable: `create table if not exists USERS (
	    ID serial,
	    USERNAME varchar(50) not null,
        PASSWORD varchar(50) not null,
        SCORE int not null,
    );`,
  addNewUser: `insert into USERS (   
        username,
	    password,
        score
       ) VALUES ($1,$2,$3) RETURNING *;`,
}

module.exports = {
  queries,
}
