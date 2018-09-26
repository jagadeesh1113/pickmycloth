var validatejs = require('validate.js');

export default function validate(fieldName, value) {

    const validation = {
        email : {
            presence : {
                message : '^Please enter an email address'
            },
            email : {
                message : '^Please enter a valid email address'
            }
        },
    
        password  : {
            presence : {
                message : '^Please enter a password'
            },
            length : {
                minimum : 6,
                message : '^Your Password must be atleast 6 characters'
            }
        },
    
        name : {
            presence : {
                message : '^Please enter a name'
            },
            length : {
                minimum : 5,
                message : '^Your Name must be atleast 5 characters'
            }
        }
    }

    var formValues = {};
    formValues[fieldName] = value;

    var formFields = {};
    formFields[fieldName] = validation[fieldName];

    const result = validatejs(formValues, formFields);

    if(result){
        return result[fieldName][0];
    }

    return null;
}