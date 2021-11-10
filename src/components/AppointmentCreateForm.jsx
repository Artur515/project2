import React from 'react';
import {Form, Input, TimePicker, DatePicker} from "antd";
import {departmentList} from "../constants/select";
import CustomSelect from "./CustomSelect";
import {useSelector} from "react-redux";
import moment from "moment";


const AppointmentCreateForm = (props) => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const config = {rules: [{type: 'object', required: true, message: 'Please select time!'}]};
    const newDepartmentList = [...departmentList].splice(1)

    const initValues = {
        firstName: appointmentWithId?.firstName || '',
        datePicker: appointmentWithId && moment(appointmentWithId?.date, 'MM/DD/YYYY'),
        timePicker: appointmentWithId && moment(appointmentWithId?.time, 'hh:mm'),
        department: appointmentWithId?.department || '',
        lastName: appointmentWithId?.lastName || '',
        contact: appointmentWithId?.contact || '',
        notes: appointmentWithId?.notes || ''
    }


    const onFinish = (values) => {
        console.log('Success:', values);
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
                               rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input value={'he'} size='large'/>
                    </Form.Item>

                    <div className='appointment_form_left_side_date_picker'>
                        <Form.Item name="datePicker" label="Date" {...config}>
                            <DatePicker size='large'/>
                        </Form.Item>

                        <Form.Item name="timePicker" label="Time" {...config}>
                            <TimePicker size='large'/>
                        </Form.Item>
                    </div>

                    <Form.Item name="department" label="Department" labelCol={{span: 24}}
                               rules={[{required: true, message: 'Please select department!'}]}>
                        <CustomSelect style={{margin: 0}} size='large' placeholder='Select department'
                                      options={newDepartmentList}/>
                    </Form.Item>

                </div>


                <div className='appointment_form_right_side'>

                    <Form.Item label="Second name" name="lastName"
                               rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input size='large'/>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="contact" label="Phone Number"
                                   labelCol={{span: 24}}
                                   rules={[{required: true, message: 'Please input your phone number!'}]}>
                            <Input size='large'/>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item name="notes" labelCol={{span: 24}}
                               label="Notes" rules={[{required: true, message: 'Please input Intro'}]}>
                        <Input.TextArea size='large' showCount maxLength={1000}/>
                    </Form.Item>

                </div>

            </Form>

            <div className='appointment_form_footer'>{props.children}</div>
        </>
    );
};

export default AppointmentCreateForm;
