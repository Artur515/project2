import {createSlice} from "@reduxjs/toolkit";


const appointmentToolkitSlice = createSlice({
    name: 'Appointments',
    initialState: {
        appointment: [],
        isAuth: false,
        error: null
    },
    reducers: {
        addNewAppointment(state, action) {
            state.appointment.push(...action.payload)
        }
    }
})


export default appointmentToolkitSlice.reducer

export const {addNewAppointment} = appointmentToolkitSlice.actions

