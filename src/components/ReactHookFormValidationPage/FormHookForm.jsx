import React, {useEffect} from 'react';
import {useForm, Controller} from "react-hook-form";
import {Input, Select} from "antd";
import {departmentList} from "../../constants/select";
import moment from "moment";
import Picker from "./Picker";
import {Row, Col} from 'antd';
import CustomButton from "../ui/CustomButton";
import {styles} from "./style";
import {useSelector} from "react-redux";
import MaskedInput from "antd-mask-input";
import {validation} from "../../validation";
import Text from "antd/es/typography/Text";


const FormHookForm = (props) => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const {control, handleSubmit, formState: {errors}, setValue} = useForm();
    const newDepartmentList = [...departmentList].splice(1)


    const onSubmit = (data) => {
        const newData = {
            ...data, date: moment(data.date._d).format("YYYY-MM-DD"),
            time: moment(data.time._d).format("HH:mm"), status: 'Active'
        }
        console.log('Sending data', newData)
    };


    useEffect(() => {
        setValue("firstName", appointmentWithId?.firstName)
        setValue("lastName", appointmentWithId?.lastName)
        setValue('date', appointmentWithId && moment(appointmentWithId?.date, "YYYY-MM-DD"))
        setValue('time', appointmentWithId && moment(appointmentWithId?.time, 'hh:mm'))
        setValue("contact", appointmentWithId?.contact)
        setValue("departments", appointmentWithId?.department)
        setValue("notes", appointmentWithId?.notes)
// eslint-disable-next-line
    }, [])


    return (<form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={[24, 100]}>
                <Col span={12}>
                    <label>First Name</label>
                    <Controller
                        control={control}
                        rules={validation.firstName}
                        name="firstName"
                        defaultValue=""
                        render={({field}) =>
                            <Input size='large' {...field} />}/>
                    <Text type="danger">
                        {errors.firstName?.type === 'required' && "First name is required"}
                        {errors.firstName?.type === 'maxLength' && "Long"}
                    </Text>
                </Col>

                <Col span={12}>
                    <label>Last Name</label>
                    <Controller
                        control={control}
                        rules={validation.lastName}
                        name="lastName"
                        defaultValue=""
                        render={({field}) =>
                            <Input size='large' {...field} />}/>
                    <Text type="danger">
                        {errors.lastName?.type === 'required' && "Last name is required"}
                        {errors.lastName?.type === 'maxLength' && "Last name is too long"}
                    </Text>

                </Col>

                <Col span={12}>
                    <label>TimePicker: </label>
                    <Picker errors={errors} control={control}/>
                </Col>

                <Col span={12}>
                    <label>Phone number</label>
                    <Controller
                        control={control}
                        rules={validation.contact}
                        name="contact"
                        defaultValue=""
                        render={({field}) =>
                            <MaskedInput mask='(###)-###-####' size='large' {...field} />}/>
                    <Text type="danger">
                        {errors.contact?.type === 'required' && "Number is required"}
                        {errors.contact?.type === 'pattern' && "Only number"}
                    </Text>
                </Col>

                <Col span={12}>
                    <label>Departments: </label>
                    <Controller
                        control={control}
                        rules={validation.departments}
                        name="departments"
                        defaultValue="Anesthetics"
                        render={({field}) => (
                            <Select style={styles.select} size='large'{...field}
                                    options={newDepartmentList.map((department) =>
                                        ({value: department, label: department}))}/>)}/>
                    <Text type="danger">
                        {errors.departments?.type === 'required' && "Number is required"}
                    </Text>
                </Col>

                <Col span={12}>
                    <label>Notes:</label>
                    <Controller
                        control={control}
                        rules={validation.notes}
                        name="notes"
                        defaultValue=""
                        render={({field}) =>
                            <Input size='large' {...field} />}/>
                    <Text type="danger">
                        {errors.notes?.type === 'required' && "Notes is required"}
                        {errors.notes?.type === 'maxLength' && "Notes is too long!!!"}
                    </Text>
                </Col>
            </Row>
            <CustomButton style={{marginTop: 30}} className="headerBtn">Create</CustomButton>
        </form>
    );
};

export default FormHookForm;