import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProfilePageStudent from "views/ProfilePage/ProfilePageStudent.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import EditProfile from "./views/EditProfile/EditProfile";
import Orders from "./views/Orders/Orders";
import ProfilePageCustomer from './views/ProfilePage/ProfilePageCustomer';

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/components" component={Components}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/edit-profile" component={EditProfile}/>
            <Route path="/login-page" component={LoginPage}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/landing-page" component={LandingPage}/>
            <Route path="/profile-student" component={ProfilePageStudent}/>
            <Route path="/profile-customer" component={ProfilePageCustomer}/>
            <Route path="/" component={LandingPage} exact/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
