const con_message = require("../dao/con_message");

exports.showData = async (data) => {
  let query = `SHOW DATABASES`;
  console.log(query);
  let res = await con_message.doQuery(query);
  console.log(res);
  //console.log( res.recordset)
  return res
};