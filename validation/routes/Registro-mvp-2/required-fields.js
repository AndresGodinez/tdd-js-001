let required_parents = [
    {field: 'member', translation: 'miembro'},
    {field: 'source', translation: 'fuente'},
    {field: 'medium', translation: 'medium'}
];

let required_fields = [
    {
        field: 'name', translation: 'nombre', parent: 'member', validate: {
            required: true,
            maxLength: 42,
            minLength: 2,
            type: 'string',
            format: 'name'
        }
    },
    {
        field: 'surname', translation: 'apellido paterno', parent: 'member', validate: {
            required: true,
            maxLength: 42,
            minLength: 2,
            type: 'string',
            format: 'name'
        }
    },
    {
        field: 'second_surname', translation: 'apellido materno', parent: 'member', validate: {
            required: false,
            maxLength: 42,
            minLength: 2,
            type: 'string',
            format: 'alphabetic'
        }
    },
    {
        field: 'mobile_phone', translation: 'número de celular', parent: 'member', validate: {
            required: true,
            maxLength: 100,
            minLength: 1,
            type: 'string',
            format: 'phone'
        }
    },
    {
        field: 'date_of_birth', translation: 'fecha de nacimiento', parent: 'member', validate: {
            required: true,
            maxLength: 100,
            minLength: 1,
            type: 'string',
            format: 'date_of_birth'
        }
    },
    {
        field: 'partner_id', translation: 'id del aliado', parent: 'source', validate: {
            required: true,
            maxLength: 5,
            minLength: 1,
            type: 'number',
            format: 'number'
        }
    },
    {
        field: 'cashier_id', translation: 'id del cajero', parent: 'source', validate: {
            required: true,
            maxLength: 15,
            minLength: 1,
            type: 'string',
            format: 'alphanumeric'
        }
    },
    {
        field: 'store_id', translation: 'id de la tienda', parent: 'source', validate: {
            required: true,
            maxLength: 5,
            minLength: 1,
            type: 'string',
            format: 'alphanumeric'
        }
    }
];

module.exports = {required_parents, required_fields};
