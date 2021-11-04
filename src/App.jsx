import React, {useState} from "react";
import CustomLayout from "./layout/CustomLayout";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import AppointmentsModal from "./components/AppointmentsModal";
import CreateButton from "./ui/CreateButton";


const App = () => {
    const [modal, setModal] = useState(false)

    return (
        <CustomLayout>
            <Header setModal={setModal}/>
            <CreateButton onClick={() => setModal(true)}/>
            <AppointmentsModal modal={modal} setModal={setModal}/>
            <AppRouter/>
        </CustomLayout>
    );
}

export default App;
