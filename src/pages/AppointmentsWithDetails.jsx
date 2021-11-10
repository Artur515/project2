import React, {useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {changeAppointmentStatus, getAppointmentWithId} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {setAppointmentWithId, setError, setLoading} from "../redux/reducer";
import AppointmentCardDetails from "../components/AppointmentCardDetails";
import {PageHeader} from "antd";
import {appointmentsIdDeleteRoute, appointmentsIdEditRoute} from "../constants/route";
import CustomSelect from "../components/CustomSelect";
import {statusList} from "../constants/select";
import CustomButton from "../components/ui/CustomButton";


const AppointmentsWithDetails = () => {
        const {appointmentWithId} = useSelector(state => state.appointmentReducer)
        const dispatch = useDispatch()
        const params = useParams()
        const history = useHistory()

        //card details
        const leftSide = () => {
            return (
                <>
                    Appointment date: <h2>{appointmentWithId?.date}</h2>
                    Time: <h2>{appointmentWithId?.time}</h2>
                    Department: <h2>{appointmentWithId?.department}</h2>
                    Notes: <h3>{appointmentWithId?.notes}</h3>
                </>)
        }
        //card details
        const rightSide = () => {
            return (
                <>
                    Patient full name: <h2>{appointmentWithId?.firstName} {appointmentWithId?.lastName}</h2>
                    Contact number:<h2>{appointmentWithId?.contact}</h2>
                    Status:<h2>{appointmentWithId?.status}</h2>
                </>
            )
        }


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


        const handleEditAppointment = (id) => {
            history.push(appointmentsIdEditRoute(id))
        }

        const handleDeleteAppointment = (id) => {
            history.push(appointmentsIdDeleteRoute(id))
        }

        const changeAppointmentStatusApi = async (obj) => {
            dispatch(setLoading(true))
            try {
                const {data} = await changeAppointmentStatus(obj)
                dispatch(setAppointmentWithId(data))
            } catch (e) {
                dispatch(setError(e.message))
            } finally {
                dispatch(setLoading(false))
            }
        }

        const handleChangeStatus = async (value) => {
            const updateAppointmentId = {...appointmentWithId, status: value}
            changeAppointmentStatusApi(updateAppointmentId)
        }


        return (
            <>
                <PageHeader className='header'>
                    <CustomSelect
                        placeholder={'Date confirmed'}
                        onChange={handleChangeStatus}
                        value={statusList.slice(1)}
                        options={statusList.slice(1)}/>
                    <CustomButton className="headerBtn" onClick={() => handleEditAppointment(appointmentWithId.id)}>
                        Edit
                    </CustomButton>
                    <CustomButton className="headerBtn" onClick={() => handleDeleteAppointment(appointmentWithId.id)}>
                        Delete
                    </CustomButton>
                </PageHeader>
                <div className='cards_appointment_content'>
                    <AppointmentCardDetails appointmentWithId={appointmentWithId}>{leftSide()}</AppointmentCardDetails>
                    <AppointmentCardDetails appointmentWithId={appointmentWithId}>{rightSide()}</AppointmentCardDetails>
                </div>
            </>


        );
    }
;

export default AppointmentsWithDetails;