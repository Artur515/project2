// export const ENTRY_ROUTE = '/'
// export const APPOINTMENT_ID_ROUTE = '/appointments/:id'
// export const APPOINTMENT_ID_EDIT_ROUTE = '/appointments/:id/edit'
//observer to в function

export const entryRoute = () => {
    return '/'
}

export const appointmentsIdRoute = (id = ':id') => {
    return `/appointments/${id}`
}


export const appointmentsIdEditRoute = (id = ':id') => {
    return `/appointments/${id}/edit`
}


