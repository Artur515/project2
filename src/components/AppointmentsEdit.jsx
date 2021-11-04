import React from 'react';
import AppointmentCreateForm from "./AppointmentCreateForm";
import CustomButton from "../ui/CustomButton";

const AppointmentsEdit = () => {
    return (
        <div style={{padding:'100px 25px'}}>
            <AppointmentCreateForm>
                <CustomButton className="headerBtn">Cancel</CustomButton>
                <CustomButton className="headerBtn">Edit</CustomButton>
            </AppointmentCreateForm>
        </div>
    );
};

export default AppointmentsEdit;