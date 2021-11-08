import {createSlice} from "@reduxjs/toolkit";


const appointmentToolkitSlice = createSlice({
    name: 'Appointments',
    initialState: {
        isAuth: localStorage.getItem('project_token'),
        appointments: [],
        appointmentWithId: null,
        isError: null,
        isLoading: false
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setAuthentication(state, action) {
            state.isAuth = action.payload
        },
        setError(state, action) {
            state.isError = action.payload
        },
        setAppointmentList(state, action) {
            state.appointments.push(...action.payload)
        },
        setAppointmentWithId(state, action) {
            state.appointmentWithId = action.payload
        },
        setUpdatedAppointmentList(state, action) {
            state.appointments = state.appointments.filter((appointment) => appointment.id !== action.payload)
        }
    }
})


export default appointmentToolkitSlice.reducer

export const {
    setAuthentication,
    setAppointmentList,
    setLoading,
    setAppointmentWithId,
    setError,
    setUpdatedAppointmentList
} = appointmentToolkitSlice.actions

