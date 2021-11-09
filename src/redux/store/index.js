import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appointmentToolkitSlice from '../reducer'


const rootReducer = combineReducers({
    appointmentReducer: appointmentToolkitSlice
})

export const store = configureStore({
    reducer: rootReducer
})