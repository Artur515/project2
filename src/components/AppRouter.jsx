import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privatRouter, publicRouter} from "../routes/routes";
import {ENTRY_ROUTE} from "../constants";

const AppRouter = () => {
    const isLogin = false

    return (
        <Switch>
            {!isLogin ?
                publicRouter.map(({path, Component}) => <Route key={path} path={path} component={Component}
                                                               exact={true}/>)
                :
                privatRouter.map(({path, Component}) => <Route key={path} path={path} component={Component}
                                                               exact={true}/>)
            }
            <Redirect to={ENTRY_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;