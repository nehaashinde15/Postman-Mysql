const con_message = require("../dao/con_message");

exports.getquery = async () => {
  let query = `SELECT * FROM EMPLOYEE_INFO`;
  console.log(query);
  let res = await con_message.doQuery(query);
  console.log(res);
  //console.log( res.recordset)
  return res ? res : {};
};