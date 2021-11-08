import {
    appointmentsIdEditRoute,
    appointmentsIdRoute,
    entryRoute
} from "../constants";
import AppointmentsTableList from "../components/AppointmentsTableList";
import AppointmentsWithId from "../components/AppointmentsWithId";
import AppointmentsEdit from "../components/AppointmentsEdit";

export const publicRouter = [
    {
        path: entryRoute(),
        Component: AppointmentsTableList
    }
]


export const privatRouter = [
    {
        path: appointmentsIdRoute(),
        Component: AppointmentsWithId
    },
    {
        path: appointmentsIdEditRoute(),
        Component: AppointmentsEdit
    }
]