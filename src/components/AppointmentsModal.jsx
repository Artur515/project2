import React from 'react';
import Modal from "antd/es/modal/Modal";

const AppointmentsModal = ({state, setState,title, onCancel, ...props}) => {

    return (
        <Modal
            {...props}
            title={title}
            centered
            width={1000}
            visible={state}
            onCancel={onCancel}>
            {props.children}
        </Modal>
    );
};

export default AppointmentsModal;