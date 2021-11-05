import React, {useState} from "react";
import CustomLayout from "./layout/CustomLayout";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import AppointmentsModal from "./components/AppointmentsModal";
import CreateButton from "./ui/CreateButton";
import AppointmentCreateForm from "./components/AppointmentCreateForm";


const App = () => {
    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)


    return (
        <CustomLayout>
            <Header setDeleteModal={setDeleteModal}/>
            <CreateButton onClick={() => setModal(true)}/>
            {deleteModal &&
            <AppointmentsModal state={deleteModal} setState={setDeleteModal} okText='Delete' title='Delete Appointment'>
                Are you sure to delete this appointment?
            </AppointmentsModal>}
            <AppointmentsModal state={modal} setState={setModal} okText='Create' title='Create an Appointment'>
                <AppointmentCreateForm/>
            </AppointmentsModal>
            <AppRouter/>
        </CustomLayout>
    );
}

export default App;
