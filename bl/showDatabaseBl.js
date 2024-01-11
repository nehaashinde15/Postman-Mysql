const validations=require('../validation/validation');
const showDatabaseDl=require('../dl/showDatabaseDl');

exports.getdatabase = async (req, res) => {
  let response = {};
    let validationObj = req.body;
    let validaionRuleObj = {
        host: "required",
        user: "required",
        password: "required",
        // database: "required"
    };
    let isValid = await validations.validate(validationObj, validaionRuleObj);
    if (isValid){
        const showDatabase = await showDatabaseDl.showData(req.body);
        response["status"] = "success";
        response["message"] = "success";
        response["data"] = showDatabase
        return response
    }
}
