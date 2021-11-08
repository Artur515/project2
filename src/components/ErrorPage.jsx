import React from 'react';
import {Alert, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setError} from "../redux/reducerSlice";


const ErrorPage = () => {
    const {isError} = useSelector(state => state.appointmentReducer)
    const dispatch = useDispatch()

    const handleDeleteError = () => {
        dispatch(setError(null))
    }

    return (
        <div style={{position: 'absolute', top: '35%', left: '40%', background: "#ececec"}}>
            <Alert
                message="Error Text"
                showIcon
                description={isError}
                type="error"
                action={
                    <Button onClick={handleDeleteError} size="large" danger>
                        Go back
                    </Button>
                }
            />
        </div>
    );
};

export default ErrorPage;