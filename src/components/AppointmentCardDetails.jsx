import React from 'react';
import {Card} from "antd";
import Loader from "./ui/Loader";

const gridStyle = {width: 550, textAlign: 'center', minHeight: '50vh'};

const AppointmentCardDetails = ({appointmentWithId, ...props}) => {

    return (
        <Card.Grid style={gridStyle}>
            <Card className='cards_appointment_content_card' type="inner" title="General information">
                {appointmentWithId === null ? <Loader props={"Wait."}/> :
                    <>
                        {props.children}
                    </>}
            </Card>
        </Card.Grid>
    );
};

export default AppointmentCardDetails;