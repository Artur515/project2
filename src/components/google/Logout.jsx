import React from 'react';
import {useGoogleLogout} from 'react-google-login';
import CustomButton from "../../ui/CustomButton";
import {useDispatch} from "react-redux";
import {setAuthentication, setError} from "../../redux/reducerSlice";

const clientId = "58079689875-mk3ptqpcpsipqlmkv45dmk4nqf6paevo.apps.googleusercontent.com"


const Logout = () => {
    const dispatch = useDispatch()

    const onLogoutSuccess = (res) => {
        dispatch(setAuthentication(false))
        localStorage.removeItem('project_token')
    };

    const onFailure = () => {
        console.log('Handle failure cases')
        dispatch(setError())
    };

    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });
    return (<CustomButton onClick={() => signOut()} className='authBtn'>Logout</CustomButton>);
};

export default Logout;