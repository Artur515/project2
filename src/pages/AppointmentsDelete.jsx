import React, {useEffect, useState} from 'react';
import AppointmentsModal from "../components/AppointmentsModal";
import AppointmentCardDetails from "../components/AppointmentCardDetails";
import {setAppointmentWithId, setError, setLoading, setUpdatedAppointmentList} from "../redux/reducer";
import {deleteAppointmentWithId} from "../api";
import {entryRoute} from "../constants/route";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import CustomButton from "../components/ui/CustomButton";

const AppointmentsDelete = () => {
    const {appointmentWithId} = useSelector(state => state.appointmentReducer)
    const [deleteModal, setDeleteModal] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()


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
                onCancel={handleCancel}
                state={deleteModal}
                footer={[<CustomButton onClick={handleCancel} key='cancel' className="headerBtn edit">
                    Cancel
                </CustomButton>,
                    <CustomButton onClick={() => deleteAppointmentsWithIdApi(appointmentWithId.id)} key='delete'
                                  className="headerBtn">
                        Delete
                    </CustomButton>]}
                title='Delete Appointment'>
                Are you sure to delete this appointment?
            </AppointmentsModal>}
            <AppointmentCardDetails/>
        </div>
    );
};

export default AppointmentsDelete;