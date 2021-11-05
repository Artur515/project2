import React from 'react';
import {Card} from "antd";

const AppointmentsWithId = () => {
    const gridStyle = {width: 550, textAlign: 'center', minHeight: '50vh'};

    return (
        <div className='cards_appointment_content'>

            <Card.Grid style={gridStyle}>
                <Card className='cards_appointment_content_card' type="inner" title="General information">
                    <p>Appointment date</p>
                    <p>Department</p>
                    <p>Notes</p>
                </Card>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <Card className='cards_appointment_content_card' type="inner" title="Contact Information">
                    <p>Patient full name</p>
                    <p>Contact number</p>
                </Card>
            </Card.Grid>

        </div>
    );
};

export default AppointmentsWithId;