import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import allRoutes from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {
                allRoutes.map(({path, Component}))
            }
        </Switch>

    );
};

export default AppRouter;