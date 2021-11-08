import React from 'react';
import {Layout} from 'antd';
import Login from "../components/google/Login";
import {useSelector} from "react-redux";
import Logout from "../components/google/Logout";

const {Sider, Content} = Layout

const CustomLayout = (props) => {
    const isAuth = useSelector(state => state.appointmentReducer.isAuth)


    return (
        <Layout className='layout'>
            <Sider className='layout_sider' width='150'>{isAuth ? <Logout/> : <Login/>}</Sider>
            <Content>
                {props.children}
            </Content>
        </Layout>
    );
};

export default CustomLayout;