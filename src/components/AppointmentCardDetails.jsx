import React from 'react';
import {Card} from "antd";
import Loader from "./ui/Loader";
import {useSelector} from "react-redux";

const gridStyle = {width: 550, textAlign: 'center', minHeight: '50vh'};

const AppointmentCardDetails = () => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    //card details
    const leftSide = () => {
        return (
            <>
                Appointment date: <h2>{appointmentWithId?.date}</h2>
                Time: <h2>{appointmentWithId?.time}</h2>
                Department: <h2>{appointmentWithId?.department}</h2>
                Notes: <h3>{appointmentWithId?.notes}</h3>
            </>)
    }
    //card details
    const rightSide = () => {
        return (
            <>
                Patient full name: <h2>{appointmentWithId?.firstName} {appointmentWithId?.lastName}</h2>
                Contact number:<h2>{appointmentWithId?.contact}</h2>
                Status:<h2>{appointmentWithId?.status}</h2>
            </>
        )
    }
    // if(!appointmentWithId){
    //     return <Loader props={"Wait..."}/>
    // }

    return (
        <div className='cards_appointment_content'>
            <Card.Grid style={gridStyle}>
                <Card className='cards_appointment_content_card' type="inner" title="General information">
                    {appointmentWithId === null ? <Loader props={"Wait."}/> :
                        <>
                            {leftSide()}
                        </>}
                </Card>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <Card className='cards_appointment_content_card' type="inner" title="General information">
                    {appointmentWithId === null ? <Loader props={"Wait."}/> :
                        <>
                            {rightSide()}
                        </>}
                </Card>
            </Card.Grid>
        </div>
    );
};

export default AppointmentCardDetails;