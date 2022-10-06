const required_parents = require('./routes/Registro-mvp-2/required-fields').required_parents;
const required_fields = require('./routes/Registro-mvp-2/required-fields').required_fields;

let missing_data_response = {
    errors: []
};

let data = require('./routes/Registro-mvp-2/json-to-validate.json');

for (let i = 0; i < required_parents.length; i++) {
    let parentNameField = data[required_parents[i].field];
    if (!parentNameField) {
        missing_data_response.errors.push({
            code: parentNameField + '_required',
            message: 'El campo ' + required_parents[i].translation + ' es requerido'
        });
    }
}

for (let i = 0; i < required_fields.length; i++) {

    if (!data[required_fields[i].parent] || !data[required_fields[i].parent][required_fields[i].field]) {
        if (required_fields[i].validate.required) {
            missing_data_response.errors.push({
                code: required_fields[i].parent + '_' + required_fields[i].field + '_required',
                message: 'El campo ' + required_fields[i].translation + ' es requerido'
            });
        }
    } else {

        if (required_fields[i].validate.required) {
            if (required_fields[i].validate.type === 'string') {
                if (typeof data[required_fields[i].parent][required_fields[i].field] !== 'string') {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_string',
                        message: 'El campo ' + required_fields[i].translation + ' debe de ser de tipo string'
                    });
                }
            }

            if (required_fields[i].validate.type === 'number') {
                if (typeof data[required_fields[i].parent][required_fields[i].field] !== 'number') {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_number',
                        message: 'El campo ' + required_fields[i].translation + ' debe de ser de tipo númerico'
                    });
                }
            }

            if (required_fields[i].validate.format === 'phone') {
                let phone_regex = /^\+\d{2}(?!(.)\1+$)+(\d{10})$/;


                if (!data[required_fields[i].parent][required_fields[i].field].match(phone_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_phone_number',
                        message: 'El campo ' + required_fields[i].translation + ' debe de tener fomato de teléfono'
                    });
                }
            }

            if (required_fields[i].validate.format === 'date') {
                let phone_regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

                if (!data[required_fields[i].parent][required_fields[i].field].match(phone_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_date_format',
                        message: 'El campo ' + required_fields[i].translation + ' debe de tener fomato de fecha YYYY-MM-DD'
                    });
                }
            }

            if (required_fields[i].validate.format === 'name') {
                let name_regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

                if (!data[required_fields[i].parent][required_fields[i].field].match(name_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_alphabetic_format',
                        message: 'El campo ' + required_fields[i].translation + 'solo puede contener letras válidas'
                    });
                }
            }

            if (required_fields[i].validate.format === 'email') {
                let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!data[required_fields[i].parent][required_fields[i].field].match(email_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_alphabetic_format',
                        message: 'El campo ' + required_fields[i].translation + 'solo puede contener letras válidas'
                    });
                }
            }

            if (required_fields[i].validate.format === 'alphabetic') {
                let alphabetic_regex = /^[a-zA-Z]+$/;

                if (!data[required_fields[i].parent][required_fields[i].field].match(alphabetic_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_alphabetic_format',
                        message: 'El campo ' + required_fields[i].translation + ' solo puede contener letras'
                    });
                }
            }

            if (required_fields[i].validate.format === 'alphanumeric') {
                let alphanumeric_regex = /^[a-zA-Z0-9]+$/;

                if (!data[required_fields[i].parent][required_fields[i].field].match(alphanumeric_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + 'alphanumeric_format',
                        message: 'El campo ' + required_fields[i].translation + ' solo puede contener letras y números'
                    });
                }
            }


            if (required_fields[i].validate.format === 'number') {
                let number_regex = /^\d+$/;

                if (!String(data[required_fields[i].parent][required_fields[i].field]).match(number_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_number',
                        message: 'El campo ' + required_fields[i].translation + 'debe de contener solo números'
                    });
                }
            }

            if (required_fields[i].validate.format === 'date_of_birth') {
                let date_of_birth_regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

                if (!data[required_fields[i].parent][required_fields[i].field].match(date_of_birth_regex)) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_date_of_birth_format',
                        message: 'El campo ' + required_fields[i].translation + ' debe de tener fomato de fecha YYYY-MM-DD'
                    });
                } else {

                    let date_of_birth = new Date(data[required_fields[i].parent][required_fields[i].field]);
                    let today = new Date();
                    let age = today.getFullYear() - date_of_birth.getFullYear();
                    let m = today.getMonth() - date_of_birth.getMonth();

                    if (m < 0 || (m === 0 && today.getDate() < date_of_birth.getDate())) {
                        age--;
                    }

                    if (age < 18) {
                        missing_data_response.errors.push({
                            code: required_fields[i].parent + '_' + required_fields[i].field + '_date_of_birth',
                            message: 'El campo ' + required_fields[i].translation + ' debe de ser mayor de edad'
                        });
                    }
                }
            }


            if (required_fields[i].validate.minLength) {
                if (data[required_fields[i].parent][required_fields[i].field].length < required_fields[i].validate.minLength) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_min_length',
                        message: 'El campo ' + required_fields[i].translation + ' debe de tener un mínimo de ' + required_fields[i].validate.minLength + ' caracteres'
                    });
                }
            }

            if (required_fields[i].validate.maxLength) {
                if (data[required_fields[i].parent][required_fields[i].field].length > required_fields[i].validate.maxLength) {
                    missing_data_response.errors.push({
                        code: required_fields[i].parent + '_' + required_fields[i].field + '_max_length',
                        message: 'El campo ' + required_fields[i].translation + ' debe de tener un máximo de ' + required_fields[i].validate.maxLength + ' caracteres'
                    });
                }
            }
        }
    }
}
console.log({missing_data_response: JSON.stringify(missing_data_response)});