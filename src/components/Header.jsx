import React from 'react';
import {PageHeader} from "antd";
import CustomButton from "../ui/CustomButton";
import CustomSelect from "./CustomSelect";
import {departmentList, statusList} from "../static";
import {useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {appointmentsIdEditRoute} from "../constants";

const Header = ({setDeleteModal}) => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const history = useHistory()
    const location = useLocation()


    const handleEditAppointment = (id) => {
        history.push(appointmentsIdEditRoute(id))
    }

    return (
        <PageHeader className='header'>
            {location.pathname === '/' ?
                <>
                    <CustomSelect placeholder={'Select Department'} options={departmentList}/>
                    <CustomSelect placeholder={'Select Status'} options={statusList}/>
                </>
                :
                <>
                    <CustomSelect placeholder={'Date confirmed'} value={statusList[1]} options={statusList}/>
                    <CustomButton onClick={() => handleEditAppointment(appointmentWithId.id)} className="headerBtn">
                        Edit
                    </CustomButton>
                    <CustomButton onClick={() => setDeleteModal(true)} className="headerBtn">Delete</CustomButton>
                </>
            }

        </PageHeader>
    );
};

export default Header;