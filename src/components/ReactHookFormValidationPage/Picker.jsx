import React from 'react';
import {Controller} from "react-hook-form";
import {DatePicker, Row, TimePicker} from "antd";
import {validation} from "../../validation";
import Text from "antd/es/typography/Text";

const Picker = ({control, errors}) => {
    return (
        <Row justify="space-between">
            <Controller
                name="date"
                rules={validation.date}
                render={({field}) =>
                    (<DatePicker size='large'{...field}/>)} control={control}/>
            <Text type="danger">
                {errors?.date?.type === 'required' && "Date is required"}
            </Text>
            <Controller
                name="time"
                rules={validation.date}
                render={({field}) =>
                    (<TimePicker size='large'{...field}/>)} control={control}/>
        </Row>
    );
};

export default Picker;