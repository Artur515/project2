import {APPOINTMENT_ID_DELETE_ROUTE, APPOINTMENT_ID_EDIT_ROUTE, APPOINTMENT_ID_ROUTE, ENTRY_ROUTE} from "../constants";
import AppointmentsList from "../components/AppointmentsList";
import AppointmentsWithId from "../components/AppointmentsWithId";
import AppointmentsEdit from "../components/AppointmentsEdit";
import AppointmentsDelete from "../components/AppointmentsDelete";

export const publicRouter = [
    {
        path: ENTRY_ROUTE,
        Component: AppointmentsList
    }
]


export const privatRouter = [
    {
        path: ENTRY_ROUTE,
        Component: AppointmentsList
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
        Component: AppointmentsDelete
    }
]