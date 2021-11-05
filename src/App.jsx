import React, {useEffect, useState} from "react";
import CustomLayout from "./layout/CustomLayout";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import AppointmentsModal from "./components/AppointmentsModal";
import CreateButton from "./ui/CreateButton";
import AppointmentCreateForm from "./components/AppointmentCreateForm";
import {useDispatch, useSelector} from "react-redux";
import {setAuthentication} from "./redux/reducerSlice";


const App = () => {
    const isAuth = useSelector(state => state.appointmentReducer.isAuth)
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('project_token')
        if (token) {
            dispatch(setAuthentication(true))
        }
        // eslint-disable-next-line
    }, [])


    return (
        <CustomLayout>
            <Header setDeleteModal={setDeleteModal}/>
            {isAuth && <CreateButton onClick={() => setModal(true)}/>}
            {deleteModal &&
            <AppointmentsModal state={deleteModal} setState={setDeleteModal} okText='Delete' title='Delete Appointment'>
                Are you sure to delete this appointment?
            </AppointmentsModal>}
            <AppointmentsModal state={modal} setState={setModal} okText='Create' title='Create an Appointment'>
                <AppointmentCreateForm/>
            </AppointmentsModal>
            <AppRouter isAuth={isAuth}/>
        </CustomLayout>
    );
}

export default App;
