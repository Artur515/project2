import React from 'react';
import AppointmentCreateForm from "./AppointmentCreateForm";
import CustomButton from "../ui/CustomButton";
import {useHistory} from "react-router-dom";


const AppointmentsEdit = () => {
    const history = useHistory()


    const handleEditAppointment = () => {
        console.log('Edit me')
    }

    return (
        <div style={{padding: '100px 25px'}}>
            <AppointmentCreateForm>
                <CustomButton onClick={()=>history.goBack()} className="headerBtn">Cancel</CustomButton>
                <CustomButton onClick={handleEditAppointment} className="headerBtn">Edit</CustomButton>
            </AppointmentCreateForm>
        </div>
    );
};

export default AppointmentsEdit;