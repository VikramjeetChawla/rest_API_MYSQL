// config/db.js


const mysql = require('mysql2');//library to establish a connection to your MySQL database and execute SQL queries.

require('dotenv').config();//library to establish a connection to your MySQL database and execute SQL queries.


const connection = mysql.createConnection({ //ine creates a new MySQL connection using the mysql2 library.
  host: process.env.DB_HOST, //pecifies the hostname of the MySQL server, retrieved from the environment variable DB_HOST
  user: process.env.DB_USER,  //Specifies the MySQL user to connect with, retrieved from the environment variable DB_USER
  password: process.env.DB_PASSWORD, // Specifies the password for the MySQL user, retrieved from the environment variable DB_PASSWORD
  database: process.env.DB_NAME //Specifies the name of the database to connect to, retrieved from the environment variable DB_NAME
});

connection.connect((err) => {  //: To check if the connection is successful and handle any connection errors.
  if (err) throw err;  //If there is an error connecting to the database, this line throws the error.
  console.log('Connected to MySQL database!');  //If the connection is successful (i.e., no error)
});

module.exports = connection;  //exports the connection object so it can be used in other modules of your application