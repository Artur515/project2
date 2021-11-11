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
                <AppointmentCardDetails/>
            </>


        );
    }
;

export default AppointmentsWithDetails;