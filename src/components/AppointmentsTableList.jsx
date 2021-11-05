import React from 'react';
import {Table} from 'antd';
import {data} from "../db";

const {Column, ColumnGroup} = Table;

const AppointmentsTableList = () => {

    return (
        <Table rowKey="id" dataSource={data} scroll={{ x: 400 }} className='content'>
            <ColumnGroup title="Patient name">
                <Column title="First Name" dataIndex="firstName" key="firstName"/>
                <Column title="Last Name" dataIndex="lastName" key="lastName"/>
            </ColumnGroup>
            <Column title="Appointment date" dataIndex="date" key="date"/>
            <Column title="Department" dataIndex="department" key="department"/>
            <Column title="Status" dataIndex="status" key="status"/>
        </Table>
    );
};

export default AppointmentsTableList;