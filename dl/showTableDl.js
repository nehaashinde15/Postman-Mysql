const con_message = require("../dao/con_message");

exports.showTables = async (data) => {
  let query = `SHOW TABLES`;
  console.log(query);
  let res = await con_message.doQuery(query);
  console.log(res);
  //console.log( res.recordset)
  return res;
};