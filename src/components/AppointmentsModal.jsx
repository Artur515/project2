import React from 'react';
import Modal from "antd/es/modal/Modal";
import AppointmentCreateForm from "./AppointmentCreateForm";

const AppointmentsModal = ({modal, setModal}) => {

    return (
        <Modal
            title="Create an Appointment"
            centered
            width={1000}
            visible={modal}
            okText="Create"
            cancelText="Cancel"
            onOk={() => console.log('Create some')}
            onCancel={() => setModal(false)}>
            <AppointmentCreateForm/>
        </Modal>
    );
};

export default AppointmentsModal;