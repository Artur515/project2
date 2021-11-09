import React from 'react';
import {Button} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";

const CreateButton = (props) => {
    return (
        <Button   {...props} style={{position:"absolute",top:40,left:60}} shape="circle" icon={<PlusCircleOutlined/>} size='large'>
            {props.children}
        </Button>);
};

export default CreateButton;