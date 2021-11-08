import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privatRouter, publicRouter} from "../routes/routes";
import {useSelector} from "react-redux";
import {entryRoute} from "../constants";

const AppRouter = () => {
    const isAuth = useSelector(state => state.appointmentReducer.isAuth)


    return (
        <Switch>
            {publicRouter.map(({path, Component}) => <Route key={path} path={path} component={Component}
                                                            exact={true}/>)}
            {isAuth &&
            privatRouter.map(({path, Component}) => <Route key={path} path={path} component={Component}
                                                           exact={true}/>)}
            <Redirect to={entryRoute()}/>
        </Switch>
    );
};

export default AppRouter;