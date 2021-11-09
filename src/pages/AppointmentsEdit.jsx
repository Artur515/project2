import React from 'react';
import AppointmentCreateForm from "../components/AppointmentCreateForm";
import CustomButton from "../components/ui/CustomButton";
import {useHistory} from "react-router-dom";



const AppointmentsEdit = () => {
    const history = useHistory()


    const handleEditAppointment = () => {
        console.log('Edit me')
    }

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <div style={{padding: '200px 25px'}}>
            <AppointmentCreateForm>
                <CustomButton onClick={handleGoBack} className="headerBtn">Cancel</CustomButton>
                <CustomButton onClick={handleEditAppointment} className="headerBtn">Edit</CustomButton>
            </AppointmentCreateForm>
        </div>
    );
};

export default AppointmentsEdit;