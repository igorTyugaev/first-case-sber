import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage";
import ProfilePageMentor from "./views/ProfilePage/ProfilePageMentor";
import ProfilePageCustomer from "./views/ProfilePage/ProfilePageCustomer";
import ProfilePageStudent from "./views/ProfilePage/ProfilePageStudent";
import EditProfile from "./views/EditProfile/EditProfile";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import MentorForStudentList from "./components/RecommendationsList/MentorForStudentList";
import OrderList from "./components/RecommendationsList/OrderList";
import StudentList from "./views/Students/StudentList";
import MentorForCustomerList from "./components/RecommendationsList/MentorForCustomerList";
import AddOrder from "./views/AddOrder/AddOrder";


var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/components" component={Components}/>
            <Route path="/login-page" component={LoginPage}/>

            <Route path="/profile" component={ProfilePageMentor}/>
            <Route path="/profile-customer" component={ProfilePageCustomer}/>
            <Route path="/profile-student" component={ProfilePageStudent}/>
            <Route path="/edit-profile" component={EditProfile}/>
            
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/landing-page" component={LandingPage}/>
            
            <Route path="/orders" component={OrderList}/>
            <Route path="/mentors" component={MentorForStudentList}/>
            <Route path="/students" component={StudentList}/>
            <Route path="/executors" component={MentorForCustomerList}/>
            <Route path="/add-order" component={AddOrder}/>
            <Route path="/" component={LandingPage} exact/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
