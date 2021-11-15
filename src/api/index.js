import axios from "axios";


const instance = axios.create({
    baseURL: `http://localhost:3001/data`,
});


export const getAllAppointments = () => {
    return instance.get('')
}


export const getAppointmentWithId = (id) => {
    return instance.get(`/${id}`)
}


export const deleteAppointmentWithId = (id) => {
    return instance.delete(`/${id}`)
}

export const changeAppointmentStatus = (appointment) => {
    return instance.put(`/${appointment.id}`, appointment)
}


export const addNewAppointment = (appointmentData) => {
    return instance.post('', appointmentData)
}

export const editAppointment = (id, appointmentData) => {
    return instance.patch(`/${id}`, appointmentData)
}
