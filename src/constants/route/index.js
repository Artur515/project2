// export const ENTRY_ROUTE = '/'
// export const APPOINTMENT_ID_ROUTE =(id=':id')=> `/appointments/${id}`
// export const APPOINTMENT_ID_EDIT_ROUTE = '/appointments/:id/edit'
// export const APPOINTMENT_ID_DELETE_ROUTE = '/appointments/:id/delete'
// observer to в function


export const entryRoute = () => {
    return '/'
}

export const appointmentsIdRoute = (id = ':id') => {
    return `/appointments/${id}`
}


export const appointmentsIdEditRoute = (id = ':id') => {
    return `/appointments/${id}/edit`
}

export const appointmentsIdDeleteRoute = (id = ':id') => {
    return `/appointments/${id}/delete`
}
