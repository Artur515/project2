import React from 'react';
import {Layout} from 'antd';
import CustomButton from "../ui/customButton/CustomButton";


const CustomLayout = (props) => {
    const {Sider, Content} = Layout

    return (
        <Layout className='layout'>
            <Sider className='layout_sider' width='150'><CustomButton className='authBtn'>Login</CustomButton></Sider>
            <Content>
                {props.children}
            </Content>
        </Layout>
    );
};

export default CustomLayout;