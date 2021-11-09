import React from 'react';
import {useGoogleLogin} from "react-google-login";
import CustomButton from "../ui/CustomButton";
import {useDispatch} from "react-redux";
import {setAuthentication, setError} from "../../redux/reducer";


// const clientId = "58079689875-mk3ptqpcpsipqlmkv45dmk4nqf6paevo.apps.googleusercontent.com"


const clientId=process.env.REACT_APP_CLIENT_ID

const Login = () => {
    const dispatch = useDispatch()


    const onSuccess = (res) => {
        localStorage.setItem('project_token', "Bearer " + res.tokenId)
        dispatch(setAuthentication(true))
    }


    const onFailure = (res) => {
        console.log(res)
        dispatch(setError(res))
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });


    return (<CustomButton onClick={() => signIn()} className='authBtn'>Login</CustomButton>)
};

export default Login;