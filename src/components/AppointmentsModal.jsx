import React from 'react';
import Modal from "antd/es/modal/Modal";

const AppointmentsModal = ({state, setState, okText, title, onClick, onCancel, ...props}) => {

    return (
        <Modal
            title={title}
            centered
            width={1000}
            visible={state}
            okText={okText}
            cancelText="Cancel"
            onOk={onClick}
            onCancel={onCancel}>
            {props.children}
        </Modal>
    );
};

export default AppointmentsModal;