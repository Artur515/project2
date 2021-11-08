import React, {useEffect} from 'react';
import {Card} from "antd";
import {useParams} from "react-router-dom";
import {getAppointmentWithId} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {setAppointmentWithId, setError, setLoading} from "../redux/reducerSlice";
import Loader from "../ui/Loader";

const gridStyle = {width: 550, textAlign: 'center', minHeight: '50vh'};

const AppointmentsWithId = () => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const dispatch = useDispatch()
    const params = useParams()

    const getAppointmentWithIdApi = async (id) => {
        dispatch(setLoading(true))
        try {
            const {data} = await getAppointmentWithId(id)
            dispatch(setAppointmentWithId(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(setLoading(false))
        }
    }






    useEffect(() => {
        getAppointmentWithIdApi(params.id)

        // eslint-disable-next-line
    }, [params.id])


    return (
        <div className='cards_appointment_content'>

            <Card.Grid style={gridStyle}>
                <Card className='cards_appointment_content_card' type="inner" title="General information">
                    {appointmentWithId === null ? <Loader props={"Wait."}/> :
                        <>
                            Appointment date: <h2>{appointmentWithId.date}</h2>
                            Department: <h2>{appointmentWithId.department} </h2>
                            Notes:<h3>{appointmentWithId.notes}</h3>
                        </>}
                </Card>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <Card className='cards_appointment_content_card' type="inner" title="Contact Information">
                    {appointmentWithId === null ? <Loader props={"Wait."}/> :
                        <>
                            Patient full name: <h2>{appointmentWithId.firstName} {appointmentWithId.lastName}</h2>
                            Contact number:<h2>{appointmentWithId.contact}</h2>
                        </>}
                </Card>
            </Card.Grid>

        </div>

    );
};

export default AppointmentsWithId;