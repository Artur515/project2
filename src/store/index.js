import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appointmentToolkitSlice from '../redux/reducerSlice'


const rootReducer = combineReducers({
    appointmentReducer: appointmentToolkitSlice
})

export const store = configureStore({
    reducer: rootReducer
})