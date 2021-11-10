import axios from "axios";

// const BASE_API = `http://localhost:3001/data`


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