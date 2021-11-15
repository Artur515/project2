import {
    appointmentsIdDeleteRoute,
    appointmentsIdEditRoute,
    appointmentsIdRoute,
    entryRoute
} from "../constants/route";
import AppointmentsTableList from "../pages/AppointmentsTableList";
import AppointmentDetailsPage from "../pages/AppointmentDetailsPage";
import AppointmentsEdit from "../pages/AppointmentsEdit";
import AppointmentsDelete from "../pages/AppointmentsDelete";


export const publicRouter = [
    {
        path: entryRoute(),
        Component: AppointmentsTableList
    }
]


export const privatRouter = [
    {
        path: appointmentsIdRoute(),
        Component: AppointmentDetailsPage
    },
    {
        path: appointmentsIdEditRoute(),
        Component: AppointmentsEdit
    }, {
        path: appointmentsIdDeleteRoute(),
        Component: AppointmentsDelete
    }
]