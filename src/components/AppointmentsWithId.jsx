import React from 'react';
import {Card} from "antd";

const AppointmentsWithId = () => {
    const gridStyle = {width: '50%', textAlign: 'center', minHeight: '70vh'};

    return (
        <div>
            <Card.Grid style={gridStyle}><Card style={{minHeight: '70vh'}} type="inner" title="Card Title">General
                information</Card></Card.Grid>
            <Card.Grid style={gridStyle}><Card style={{minHeight: '70vh'}} type="inner"
                                               title="Card Title">Content</Card></Card.Grid>
        </div>
    );
};

export default AppointmentsWithId;