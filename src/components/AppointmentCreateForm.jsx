import React from 'react';
import {Form, Input, TimePicker, DatePicker} from "antd";
import {departmentList} from "../constants/select";
import CustomSelect from "./CustomSelect";
import {useSelector} from "react-redux";
import moment from "moment";
import {validationAntd} from "../validation";
import MaskedInput from "antd-mask-input";


const AppointmentCreateForm = (props) => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const newDepartmentList = [...departmentList].splice(1)

    const initValues = {
        firstName: appointmentWithId?.firstName || '',
        date: appointmentWithId && moment(appointmentWithId?.date, 'MM/DD/YYYY'),
        time: appointmentWithId && moment(appointmentWithId?.time, 'hh:mm'),
        department: appointmentWithId?.department || '',
        lastName: appointmentWithId?.lastName || '',
        contact: appointmentWithId?.contact || '',
        notes: appointmentWithId?.notes || ''
    }

    const onFinish = (values) => {
        console.log('Success:', values);

        const data = {
            ...values,
            date: moment(values.date._d).format("YYYY-MM-DD"),
            time: moment(values.time._d).format("HH:mm"),
            status: ''
        }
        console.log('Sending data', data)

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form className='appointment_form'
                  initialValues={initValues}
                  labelCol={{span: 24}}
                  wrapperCol={{span: 24}}
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
                <div className='appointment_form_footer'>{props.children}</div>
            </Form>
        </>
    );
};

export default AppointmentCreateForm;