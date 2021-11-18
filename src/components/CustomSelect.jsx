import React from 'react';
import {Select} from "antd";

const {Option} = Select

const
    CustomSelect = ({placeholder, options, value, ...props}) => {

    return (
        <Select
            {...props}
            style={{minWidth: 200, margin: props.style ? props.style : 15}}
            placeholder={placeholder}
            defaultValue={value ? value : placeholder}
            showSearch>
            {options.map((option, index) => <Option key={index} value={option}>{option}</Option>)}
        </Select>
    );
};

export default CustomSelect;