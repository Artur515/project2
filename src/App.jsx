import React, {useEffect, useState} from "react";
import CustomLayout from "./layout/CustomLayout";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import AppointmentsModal from "./components/AppointmentsModal";
import CreateButton from "./ui/CreateButton";
import AppointmentCreateForm from "./components/AppointmentCreateForm";
import {useDispatch, useSelector} from "react-redux";
import {
    setAppointmentList,
    setAppointmentWithId,
    setAuthentication,
    setError,
    setLoading,
    setUpdatedAppointmentList
} from "./redux/reducerSlice";
import {deleteAppointmentWithId, getAllAppointments} from "./api";
import ErrorPage from "./components/ErrorPage";
import {useHistory} from "react-router-dom";
import {entryRoute} from "./constants";


const App = () => {
    const {isAuth, isError, appointmentWithId} = useSelector(state => state.appointmentReducer)
    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()



    const getAllAppointmentsApi = async () => {
        dispatch(setLoading(true))
        try {
            const {data} = await getAllAppointments()
            dispatch(setAppointmentList(data))
        } catch (error) {
            dispatch(setError(error))
        } finally {
            dispatch(setLoading(false))
        }
    }


    const deleteAppointmentsWithIdApi = async (id) => {
        dispatch(setLoading(true))
        try {
            await deleteAppointmentWithId(id)
            dispatch(setUpdatedAppointmentList(id))
            dispatch(setAppointmentWithId(null))
            history.push(entryRoute())
        } catch (error) {
            dispatch(setError(error))
        } finally {
            setDeleteModal(false)
            dispatch(setLoading(false))
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('project_token')

        if (token) {
            dispatch(setAuthentication(true))
        }
        getAllAppointmentsApi()
        // eslint-disable-next-line
    }, [])


    const createAppointment = () => {
        console.log("hello create")
    }

    return (<>
            {isError ? <ErrorPage/> :
                <CustomLayout>
                    <Header setDeleteModal={setDeleteModal}/>
                    {isAuth && <CreateButton onClick={() => setModal(true)}/>}
                    {deleteModal &&
                    <AppointmentsModal
                        onClick={() => deleteAppointmentsWithIdApi(appointmentWithId.id)}
                        state={deleteModal}
                        setState={setDeleteModal}
                        okText='Delete'
                        title='Delete Appointment'>
                        Are you sure to delete this appointment?
                    </AppointmentsModal>}
                    <AppointmentsModal
                        onClick={() => createAppointment()}
                        state={modal}
                        setState={setModal}
                        okText='Create'
                        title='Create an Appointment'>
                        <AppointmentCreateForm/>
                    </AppointmentsModal>
                    <AppRouter/>
                </CustomLayout>
            }
        </>
    );
}

export default App;
