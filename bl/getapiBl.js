var validation=require('../validation/validation')
var selectTable=require('../dl/selectTable');

exports.getquery = async (req, res) => {
    let response = {};
      let geofences = await selectTable.getquery();
      console.log(geofences)
          response["status"] = "success";
          response["message"] = "geofence data fetched";
          response["data"] = geofences;
    return response;
  };