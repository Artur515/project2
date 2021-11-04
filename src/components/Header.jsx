import React from 'react';
import {PageHeader} from "antd";
import CustomButton from "../ui/CustomButton";
import CustomSelect from "./CustomSelect";
import {departmentList, statusList} from "../static";

const Header = () => {


    const path = '/appointments/:id'

    return (
        <PageHeader className='header'>
            {path === '/' ?
                <>
                    <CustomSelect placeholder={'Select Department'} options={departmentList}/>
                    <CustomSelect placeholder={'Select Status'} options={statusList}/>
                </>
                :
                <>
                    <CustomSelect placeholder={'Date confirmed'} value={statusList[1]} options={statusList}/>
                    <CustomButton className="headerBtn">Edit</CustomButton>
                    <CustomButton className="headerBtn">Delete</CustomButton>
                </>
            }

        </PageHeader>
    );
};

export default Header;