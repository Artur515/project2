import React, {useState} from "react";
import CustomLayout from "./layout/CustomLayout";
import AppRouter from "./routes/AppRouter";
import AppointmentsModal from "./components/AppointmentsModal";
import CreateButton from "./components/ui/CreateButton";
import AppointmentCreateForm from "./components/AppointmentCreateForm";
import {useDispatch, useSelector} from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import {useLocation} from "react-router-dom";
import {setAppointmentWithId} from "./redux/reducer";
import CustomBreadcrumb from "./components/CustomBreadcrumb";
import CustomButton from "./components/ui/CustomButton";


const App = () => {
    const {isAuth, isError} = useSelector(state => state.appointmentReducer)
    const [modal, setModal] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()


//     useEffect(() => {
//         const token = localStorage.getItem('project_token')
//         if (token) {
//             dispatch(setAuthentication(true))
//         }
// // eslint-disable-next-line
//     }, [])
//

    const handleCancel = () => {
        setModal(false)
    }


    const handleCreateAppointment = () => {
        dispatch(setAppointmentWithId(null))
        setModal(true)
    }

    if (isError) {
        return <ErrorPage/>
    }


    const confirmPath = location.pathname !== '/'

    return (
        <CustomLayout>
            {/*<FormHookForm/>*/}
            {isAuth && <CreateButton disabled={confirmPath} onClick={handleCreateAppointment}/>}
            <CustomBreadcrumb/>
            <AppointmentsModal
                destroyOnClose={true}
                onCancel={handleCancel}
                footer={null}
                state={modal}
                setState={setModal}
                title='Create an Appointment'>
                <AppointmentCreateForm setModal={setModal}>
                    {disabled =>
                        (<CustomButton disabled={disabled} className={`headerBtn ${disabled && 'disabled'}`}>
                            Create
                        </CustomButton>)}
                </AppointmentCreateForm>
            </AppointmentsModal>
            <AppRouter/>
        </CustomLayout>
    );
}

export default App;
