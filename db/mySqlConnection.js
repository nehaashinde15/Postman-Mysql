const mysql=require('mysql2');
const dotenv=require('dotenv');
dotenv.config();

 var envConfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'employee_database',
  });
  

  exports.mysqlConfig = () => {
    const config = {               
      host: envConfig.host,
      user: envConfig.user,
      password: envConfig.password,
      database: envConfig.database,
      port: envConfig.port
    }
    console.log(config)
    return config;
    }

  // module.exports=connection;
  