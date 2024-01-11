const niv = require('node-input-validator');

    function obj() {
        this.validate = async (fieldsObj, rulesObj,msgObj={}) => {
            const v = new niv.Validator(fieldsObj, rulesObj,msgObj);
            const matched = await v.check();
            if (!matched) {
                global.errorMessage = v.errors;
                console.log(v.errors);
            }
            return matched;
        }
    }

module.exports = new obj();

