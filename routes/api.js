const express = require('express');
const app = express();

const showDatabaseController=require('../controller/showDatabaseController');
const showTableController=require('../controller/showTableController');
const getapiController=require('../controller/getapi');

app.use('/showdatabase',showDatabaseController);
app.use('/showTable',showTableController);
app.use('/api',getapiController);


module.exports = app;


// router.post('/api/postman_mysql', (req, res) => {
//     const query = 'SHOW DATABASES';
//     mySqlConnection.query(query, (err, results) => {
//       if (err) throw err;
//       console.log(results);
//       const databases = results.map((result) => result.Database);
//       res.json({ databases });
//     });
//   });

//   router.post('/api/postman_mysql/tables', (req, res) => {
//     const showTablesQuery = 'SHOW TABLES';
//     mySqlConnection.query(showTablesQuery,(err, results) => {
//       if (err) throw err;
//       console.log(results);
//       const tables =results.map((results) => results.Tables_in_employee_database);
//       res.json({ tables });
//     });
//   });

//   module.exports=router;