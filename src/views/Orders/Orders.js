import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/editProfile.js";
// core components
import Header from "../../components/Header/Header";
import HeaderLinksProfile from "../../components/Header/HeaderLinksProfile";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import MyOrders from "../../components/MyOrders/MyOrders";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Orders(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div>
            <Header
                color="white"
                routes={dashboardRoutes}
                brand="FirstCase"
                rightLinks={<HeaderLinksProfile/>}
                fixed
                {...rest}/>

            <div className={classNames(classes.main)}>
                {/*TODO: В зависимости от ролли будут разные списки*/}
                <MyOrders/>
            </div>
            <Footer/>
        </div>
    );
}
