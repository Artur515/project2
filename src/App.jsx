import React, {useState} from "react";
import CustomLayout from "./layout/CustomLayout";
import AppRouter from "./components/AppRouter";
import AppointmentsModal from "./components/AppointmentsModal";
import CreateButton from "./components/ui/CreateButton";
import AppointmentCreateForm from "./components/AppointmentCreateForm";
import {useDispatch, useSelector} from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import { useLocation} from "react-router-dom";
import {setAppointmentWithId} from "./redux/reducer";
import CustomBreadcrumb from "./components/CustomBreadcrumb";


const App = () => {
    const {isAuth, isError} = useSelector(state => state.appointmentReducer)
    const [modal, setModal] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()

    const createAppointment = () => {
        console.log("hello create new appointment")
    }

    const handleCancel = () => {
        setModal(false)
    }

    const handleCreateAppointment = () => {
        setModal(true)
        dispatch(setAppointmentWithId(null))
    }

    if (isError) {
        return <ErrorPage/>
    }

    const confirmPath = location.pathname !== '/'

    return (
        <CustomLayout>
            {isAuth && <CreateButton disabled={confirmPath} onClick={handleCreateAppointment}/>}
            <CustomBreadcrumb/>
            <AppointmentsModal
                onClick={() => createAppointment()}
                onCancel={handleCancel}
                state={modal}
                setState={setModal}
                okText='Create'
                title='Create an Appointment'>
                <AppointmentCreateForm/>
            </AppointmentsModal>
            <AppRouter/>
        </CustomLayout>
    );
}

export default App;
