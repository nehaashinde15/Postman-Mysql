const express = require('express');
const bodyParser = require('body-parser');
const createConnection=require('./db/mySqlConnection');

const apiRouter=require('./routes/api');
const con_message=require('./dao/con_message');
const env = require('dotenv').config();


const app = express();

app.use(bodyParser.json());

// MySql Connection
// const db_con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'employee_database',
//   });
  
//   db_con.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL!');
//   });

//MySqlConnection
// app.use(createConnection(),createConnection)

  // app.post('/postman_mysql', (req, res) => {
  //   const query = 'SHOW DATABASES';
  //   db_con.query(query, (err, results) => {
  //     if (err) throw err;
  //     console.log(results);
  //     const databases = results.map((result) => result.Database);
  //     res.json({ databases });
  //   });
  // });

  // app.post('/postman_mysql/tables', (req, res) => {
  //   const showTablesQuery = 'SHOW TABLES';
  //   db_con.query(showTablesQuery,(err, results) => {
  //     if (err) throw err;
  //     console.log(results);
  //     const tables =results.map((results) => results.Tables_in_employee_database);
  //     res.json({ tables });
  //   });
  // });


//Routes
app.use('/api',apiRouter);

const port = 3001;


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  module.exports = app