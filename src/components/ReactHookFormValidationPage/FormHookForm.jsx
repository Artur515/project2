import React from 'react';
import {useForm, Controller} from "react-hook-form";
import {Input, Select} from "antd";
import {departmentList} from "../../constants/select";


const styles = {
    form: {padding: "200px 50px"},
    leftSide: {
        width: '45%',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}

const FormHookForm = () => {
    const {control, handleSubmit} = useForm();
    const newDepartmentList = [...departmentList].splice(1)

    const onSubmit = (data) => {
        console.log(data)
    };

    return (<form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div style={styles.leftSide}>
                <div>
                    <label>First Name</label>
                    <Controller
                        render={({field}) => <Input {...field} />}
                        name="firstName"
                        control={control}
                        defaultValue=""/>
                </div>
            </div>
            <div>
                <label>Departments: </label>
                <Controller
                    name="Departments"
                    render={({field}) => (
                        <Select
                            {...field}
                            options={[
                                {value: 'anesthetics', label: 'Anesthetics'},
                                {value: 'cardiology', label: 'Cardiology'},
                                {value: 'oncology', label: 'Oncology'},
                                {value: 'orthopedics', label: 'Orthopedics'},
                                {value: 'surgery', label: 'Surgery'}]}/>)}
                    control={control}
                    defaultValue="Anesthetics"/>
            </div>
            <input type="submit" value='Send'/>
        </form>
    );
};

export default FormHookForm;