const mysql = require('mysql2');
const bluebird = require('bluebird');
// const mySqlConnection=require('../db/mySqlConnection')


const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'employee_database',
};
console.log(mysqlConfig)

const pool = mysql.createPool(mysqlConfig);
const queryAsync = bluebird.promisify(pool.query.bind(pool));
console.log(pool)
exports.doQuery = (query) => {
  return queryAsync(query)
    .then((results) => {
      console.log(results)
      return results;
    })
    .catch((error) => {
      console.error('Error executing MySQL query:', error);
      throw error;
    });
};