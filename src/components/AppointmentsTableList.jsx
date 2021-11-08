import React from 'react';
import {Table} from 'antd';
import {useSelector} from "react-redux";
import Loader from "../ui/Loader";
import {useHistory} from "react-router-dom";
import {appointmentsIdRoute} from "../constants";

const {Column, ColumnGroup} = Table;

const AppointmentsTableList = () => {
    const {appointments, isLoading} = useSelector(state => state.appointmentReducer)
    const history = useHistory()


    return (
        <>
            {isLoading ? <Loader props={"Loading"}/> :
                <Table onRow={(record) => {
                    return {
                        onClick: event => {
                            history.push(appointmentsIdRoute(record.id))
                        }
                    };
                }} rowKey="id" dataSource={appointments} scroll={{x: 400}} className='content'>
                    <ColumnGroup title="Patient name">
                        <Column title="First Name" dataIndex="firstName" key="firstName"/>
                        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
                    </ColumnGroup>
                    <Column title="Appointment date" dataIndex="date" key="date"/>
                    <Column title="Department" dataIndex="department" key="department"/>
                    <Column title="Status" dataIndex="status" key="status"/>
                </Table>}
        </>
    )
};

export default AppointmentsTableList;