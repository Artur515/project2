import React from 'react';
import {Form, Input, TimePicker, DatePicker} from "antd";
import {departmentList} from "../static";
import CustomSelect from "./CustomSelect";


const AppointmentCreateForm = (props) => {
    const config = {rules: [{type: 'object', required: true, message: 'Please select time!'}]};
    const newDepartmentList = [...departmentList].splice(1)



    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form style={{display: "flex", justifyContent: "space-between"}} name="basic"
                  initialValues={{remember: true}}
                  labelCol={{span: 24}}
                  wrapperCol={{span: 24}}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}>
                <div style={{width: "45%"}}>

                    <Form.Item label="First name" name="userName"
                               rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input size='large'/>
                    </Form.Item>

                    <div style={{marginBottom: 25, display: 'flex', justifyContent: "space-between"}}>
                        <Form.Item name="date-picker" label="Date" {...config}>
                            <DatePicker size='large'/>
                        </Form.Item>

                        <Form.Item name="time-picker" label="Time" {...config}>
                            <TimePicker size='large'/>
                        </Form.Item>
                    </div>

                    <Form.Item name="department" label="Department" labelCol={{span: 24}}
                               rules={[{required: true, message: 'Please select department!'}]}>
                        <CustomSelect style={{margin: 0}} size='large' placeholder='Date confirmed'
                                      options={newDepartmentList}/>
                    </Form.Item>
                </div>


                <div style={{width: "45%"}}>
                    <Form.Item label="Second name" name="secondName"
                               rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input size='large'/>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="phone" label="Phone Number"
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

            <div style={{marginTop: 25, display: "flex", justifyContent: "flex-end"}}>{props.children}</div>
        </>
    );
};

export default AppointmentCreateForm;


// <Form.Item label="Success" hasFeedback validateStatus="success">
//     <Input allowClear placeholder="with allowClear" />
// </Form.Item>
//
// <Form.Item label="Warning" hasFeedback validateStatus="warning">
//     <Input.Password placeholder="with input password" />
// </Form.Item>