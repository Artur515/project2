export const validation = {
    firstName: {required: true, maxLength: 100},
    lastName: {required: true, maxLength: 100},
    date: {required: true},
    contact: {required: true, pattern: /^\(\d{3}\)-\d{3}-\d{4}$/},
    departments: {required: true},
    notes: {required: true, maxLength: 1000}
}

export const validationAntd = {
    firstName: [{required: true, message: 'First name is required!'}, {
        max: 100,
        message: 'First name is too long!'
    }],
    lastName: [{required: true, message: 'Last name is required!'}, {
        max: 100,
        message: 'Last name is too long!'
    }],
    date: [{required: true, message: 'Date is required!'}],
    contact: [{required: true, message: 'Contact is required!'}],
    departments: [{required: true, message: 'Department is required!'}],
    notes: [{required: true, message: 'Notes is required!'}, {max: 1000, message: 'Notes is too long!'}]
}