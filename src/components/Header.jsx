import React from 'react';
import {PageHeader} from "antd";
import CustomButton from "../ui/customButton/CustomButton";
import CustomSelect from "./CustomSelect";

const Header = ({path}) => {


    return (
        <PageHeader className='header'>
            {path === '/' ?
                <>
                    <CustomSelect/>
                    <CustomSelect/>
                </>
                :
                <>
                    <CustomSelect/>
                    <CustomButton className="headerBtn">Edit</CustomButton>
                    <CustomButton className="headerBtn">Delete</CustomButton>
                </>
            }

        </PageHeader>
    );
};

export default Header;