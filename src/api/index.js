import axios from "axios";

const BASE_API = `http://localhost:3001/data`


export const getAllAppointments = () => {
    return axios.get(BASE_API)
}


export const getAppointmentWithId = (id) => {
    return axios.get(BASE_API + `/${id}`)
}


export const deleteAppointmentWithId = (id) => {
    return axios.delete(BASE_API + `/${id}`)
}