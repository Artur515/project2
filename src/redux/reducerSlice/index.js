import {createSlice} from "@reduxjs/toolkit";


const appointmentToolkitSlice = createSlice({
    name: 'Appointments',
    initialState: {
        isAuth: false,
        appointment: [],
        error: null
    },
    reducers: {

        setAuthentication(state, action) {
            state.isAuth = action.payload
        },
        addNewAppointment(state, action) {
            state.appointment.push(...action.payload)
        }
    }
})


export default appointmentToolkitSlice.reducer

export const {setAuthentication, addNewAppointment} = appointmentToolkitSlice.actions

