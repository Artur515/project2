import {APPOINTMENT_ID_DELETE_ROUTE, APPOINTMENT_ID_EDIT_ROUTE, APPOINTMENT_ID_ROUTE, ENTRY_ROUTE} from "../constants";
import AppointmentsTableList from "../components/AppointmentsTableList";
import AppointmentsWithId from "../components/AppointmentsWithId";
import AppointmentsEdit from "../components/AppointmentsEdit";
import AppointmentsDeleteModal from "../components/AppointmentsDeleteModal";

export const publicRouter = [
    {
        path: ENTRY_ROUTE,
        Component: AppointmentsTableList
    }
]


export const privatRouter = [
    {
        path: ENTRY_ROUTE,
        Component: AppointmentsTableList
    },
    {
        path: APPOINTMENT_ID_ROUTE,
        Component: AppointmentsWithId
    },
    {
        path: APPOINTMENT_ID_EDIT_ROUTE,
        Component: AppointmentsEdit
    }, {
        path: APPOINTMENT_ID_DELETE_ROUTE,
        Component: AppointmentsDeleteModal
    }
]