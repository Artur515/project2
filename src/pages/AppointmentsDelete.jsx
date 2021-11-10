import React, {useEffect, useState} from 'react';
import AppointmentsModal from "../components/AppointmentsModal";
import AppointmentCardDetails from "../components/AppointmentCardDetails";
import {setAppointmentWithId, setError, setLoading, setUpdatedAppointmentList} from "../redux/reducer";
import {deleteAppointmentWithId} from "../api";
import {entryRoute} from "../constants/route";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const AppointmentsDelete = () => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const [deleteModal, setDeleteModal] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()

    //card details
    const leftSide = () => {
        return (
            <>
                Appointment date: <h2>{appointmentWithId?.date}</h2>
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
            </>
        )
    }


    const deleteAppointmentsWithIdApi = async (id) => {
        dispatch(setLoading(true))
        try {
            await deleteAppointmentWithId(id)
            dispatch(setUpdatedAppointmentList(id))
            dispatch(setAppointmentWithId(null))
        } catch (error) {
            dispatch(setError(error))
        } finally {
            setDeleteModal(false)
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        appointmentWithId === null && history.push(entryRoute())
        // eslint-disable-next-line
    }, [appointmentWithId])


    const handleCancel = () => {
        setDeleteModal(false)
        history.goBack()
    }


    return (
        <div style={{padding: "106px 0px"}}>
            {deleteModal &&
            <AppointmentsModal
                onClick={() => deleteAppointmentsWithIdApi(appointmentWithId.id)}
                onCancel={handleCancel}
                state={deleteModal}
                setState={setDeleteModal}
                okText='Delete'
                title='Delete Appointment'>
                Are you sure to delete this appointment?
            </AppointmentsModal>}
            <div className='cards_appointment_content'>
                <AppointmentCardDetails appointmentWithId={appointmentWithId}>{leftSide()}</AppointmentCardDetails>
                <AppointmentCardDetails appointmentWithId={appointmentWithId}>{rightSide()}</AppointmentCardDetails>
            </div>
        </div>
    );
};

export default AppointmentsDelete;