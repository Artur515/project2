import React, {useState} from 'react';
import {Form, Input, TimePicker, DatePicker} from "antd";
import {departmentList} from "../constants/select";
import CustomSelect from "./CustomSelect";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {validationAntd} from "../validation";
import MaskedInput from "antd-mask-input";
import {setAppointmentList, setAppointmentWithId, setError, setLoading} from "../redux/reducer";
import {addNewAppointment, changeAppointmentStatus, editAppointment, getAllAppointments} from "../api";
import {Redirect, useHistory} from "react-router-dom";
import {entryRoute} from "../constants/route";


const AppointmentCreateForm = (props) => {
    const {appointmentWithId, appointments} = useSelector(state => state.appointmentReducer)
    const newDepartmentList = [...departmentList].splice(1)
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const initValues = {
        firstName: appointmentWithId?.firstName || '',
        date: appointmentWithId && moment(appointmentWithId?.date, 'DD-MM-YYYY'),
        time: appointmentWithId && moment(appointmentWithId?.time, 'hh:mm'),
        department: appointmentWithId?.department || '',
        lastName: appointmentWithId?.lastName || '',
        contact: appointmentWithId?.contact || '',
        notes: appointmentWithId?.notes || ''
    }


    const onFinish = (values) => {
        setDisabled(false)
        // console.log('Success send:', values);
        const data = {
            ...values,
            date: moment(values.date._d).format("DD-MM-YYYY"),
            time: moment(values.time._d).format("HH:mm"),
            status: appointmentWithId?.status || 'Active'
        }
        console.log('Sending data', data)
        appointmentWithId ? editAppointmentApi(appointmentWithId.id, data) : createAppointmentApi(data)
    };


    const onFinishFailed = (errorInfo) => {
        setDisabled(true)
    };

    const editAppointmentApi = async (id, appointment) => {
        dispatch(setLoading(true))
        try {
            const {data} = await editAppointment(id, appointment)
            dispatch(setAppointmentWithId(data))
            history.push(entryRoute())
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(setLoading(false))
        }
    }

    const createAppointmentApi = async (appointment) => {
        dispatch(setLoading(true))
        try {
            const {data} = await addNewAppointment(appointment)
            dispatch(setAppointmentList([...appointments, data]))
            props.setModal(false)
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(setLoading(false))
        }
    }


    //for disable button
    const onValueChange = (changedValues, allValues) => {
        for (let key in allValues) {
            if (key === '' || null) {
                setDisabled(true)
            }
        }
        setDisabled(false)
    }

    return (
        <>
            <Form className='appointment_form'
                  initialValues={initValues}
                  labelCol={{span: 24}}
                  wrapperCol={{span: 24}}
                  onValuesChange={onValueChange}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}>
                <div className='appointment_form_left_side'>

                    <Form.Item label="First name" name="firstName"
                               rules={validationAntd.firstName}>
                        <Input size='large'/>
                    </Form.Item>

                    <div className='appointment_form_left_side_date_picker'>
                        <Form.Item name="date" label="Date" rules={validationAntd.date}>
                            <DatePicker size='large'/>
                        </Form.Item>

                        <Form.Item name="time" label="Time" rules={validationAntd.date}>
                            <TimePicker size='large'/>
                        </Form.Item>
                    </div>

                    <Form.Item name="department" label="Department" labelCol={{span: 24}}
                               rules={validationAntd.departments}>
                        <CustomSelect style={{margin: 0}} size='large' placeholder='Select department'
                                      options={newDepartmentList}/>
                    </Form.Item>

                </div>


                <div className='appointment_form_right_side'>

                    <Form.Item label="Second name" name="lastName"
                               rules={validationAntd.lastName}>
                        <Input size='large'/>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="contact" label="Phone Number" labelCol={{span: 24}}
                                   rules={validationAntd.contact}>
                            <MaskedInput mask='(###)-###-####' size='large'/>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item name="notes" labelCol={{span: 24}} label="Notes"
                               rules={validationAntd.notes}>
                        <Input.TextArea size='large' showCount maxLength={1000}/>
                    </Form.Item>

                </div>
                <div className='appointment_form_footer'>{props.children(disabled)}</div>
            </Form>
        </>
    );
};

export default AppointmentCreateForm;