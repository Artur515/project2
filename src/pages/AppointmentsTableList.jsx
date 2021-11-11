import React, {useEffect, useState} from 'react';
import {PageHeader, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/ui/Loader";
import {useHistory} from "react-router-dom";
import {appointmentsIdRoute} from "../constants/route";
import CustomSelect from "../components/CustomSelect";
import {departmentList, statusList} from "../constants/select";
import {setAppointmentList, setAuthentication, setError, setLoading} from "../redux/reducer";
import {getAllAppointments} from "../api";


const {Column, ColumnGroup} = Table;

const AppointmentsTableList = () => {
    const {appointments, isLoading, isAuth} = useSelector(state => state.appointmentReducer)
    const [selected, setSelected] = useState([])
    const [selectedDepartment, setSelectedDepartment] = useState('All')
    const [selectedStatus, setSelectedStatus] = useState('All')
    const history = useHistory()
    const dispatch = useDispatch()


    const getAllAppointmentsApi = async () => {
        dispatch(setLoading(true))
        try {
            const {data} = await getAllAppointments()
            dispatch(setAppointmentList(data))
            setSelected(data)
        } catch (error) {
            dispatch(setError(error))
        } finally {
            dispatch(setLoading(false))
        }
    }

    const handleChangeSelectDepartment = (value) => {
        setSelectedDepartment(value)
    }


    const handleChangeStatus = (value) => {
        setSelectedStatus(value)
    }

    //for watching selects
    useEffect(() => {
        let result = appointments
        if (selectedDepartment !== 'All') {
            result = result.filter((appointment) => {
                return appointment.department === selectedDepartment
            })
        }
        if (selectedStatus !== 'All') {
            result = result.filter((appointment) => {
                return appointment.status === selectedStatus
            })
        }
        setSelected(result)
        // eslint-disable-next-line
    }, [selectedDepartment, selectedStatus])


    useEffect(() => {
        const token = localStorage.getItem('project_token')
        if (token) {
            dispatch(setAuthentication(true))
        }
        getAllAppointmentsApi()
        // eslint-disable-next-line
    }, [])


    if (isLoading) {
        return <Loader props={"Loading"}/>
    }


    return (
        <>
            <PageHeader className='header'>
                <CustomSelect placeholder={'Select Department'}
                              onChange={handleChangeSelectDepartment}
                              options={departmentList}/>
                <CustomSelect placeholder={'Select Status'}
                              onChange={handleChangeStatus}
                              options={statusList}/>
            </PageHeader>
            <Table onRow={(record) => {
                return {
                    onClick: event => {
                        isAuth && history.push(appointmentsIdRoute(record.id))
                    }
                };
            }}
                   rowClassName={(index) => index && isAuth && 'cursor'}
                   rowKey="id" dataSource={selected} scroll={{x: 400}} className='content'>
                <ColumnGroup title="Patient name">
                    <Column title="First Name" dataIndex="firstName" key="firstName"/>
                    <Column title="Last Name" dataIndex="lastName" key="lastName"/>
                </ColumnGroup>
                <ColumnGroup title="Appointment date">
                    <Column title="Date" dataIndex="date" key="date"/>
                    <Column title="Time" dataIndex="time" key="time"/>
                </ColumnGroup>
                <Column title="Department" dataIndex="department" key="department"/>
                <Column title="Status" dataIndex="status" key="status"/>
            </Table>
        </>
    )
};

export default AppointmentsTableList;