import React from 'react';
import Main from "../main/Main";
import {Route, Switch} from "react-router-dom";
import Registration from "../../../n2-features/f1-auth/a2-registr/Registration";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import PasswordRestore from "../../../n2-features/f1-auth/a3-restore/PasswordRestore";
import PasswordUpdate from "../../../n2-features/f1-auth/a4-update/PasswordUpdate";
import Profile from "../../../n2-features/f1-auth/a4-profile/Profile";

const Routers = () => {
    return (
        <Switch>
            <Route
                path="/"
                exact
                component={Main}
            />
            <Route
                path="/"
                exact
                component={Main}
            />
            <Route
                path="/registration"
                exact
                component={Registration}
            />
            <Route
                path="/login"
                exact
                component={Login}
            />
            <Route
                path="/profile"
                exact
                component={Profile}
            />
            <Route
                path="/restore"
                exact
                component={PasswordRestore}
            />
            <Route
                path="/update"
                exact
                component={PasswordUpdate}
            />
        </Switch>
    );
}

export default Routers;
