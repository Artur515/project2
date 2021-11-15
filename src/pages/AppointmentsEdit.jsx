import React from 'react';
import AppointmentCreateForm from "../components/AppointmentCreateForm";
import CustomButton from "../components/ui/CustomButton";
import {useHistory} from "react-router-dom";


const AppointmentsEdit = () => {
    const history = useHistory()

    const handleGoBack = () => {
        history.goBack()
    }


    return (
        <div className='edit_wrapper'>
            <AppointmentCreateForm>
                {disabled =>
                    (<CustomButton disabled={disabled} className={`headerBtn ${disabled && 'disabled'}`}>
                        Edit
                    </CustomButton>)}
            </AppointmentCreateForm>
            <CustomButton onClick={handleGoBack} className="headerBtn edit_wrapper_button">
                Cancel
            </CustomButton>
        </div>
    );
};

export default AppointmentsEdit;