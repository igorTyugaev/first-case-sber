import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/executorItem.js";
import CardProfileOrder from "../CardProfileOrder/CardProfileOrder";
import ProfileAboutOrder from "../ProfileAboutOrder/ProfileAboutOrder";
import Button from "../CustomButtons/Button";
import {ListItem} from "@material-ui/core";
import classNames from "classnames";
import OfferActions from "../OfferActions/OfferActions";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function ExecutorItem(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div className={classNames(classes.main)}>

            <CardProfileOrder/>

            <ProfileAboutOrder/>

            <OfferActions/>
        </div>
    );
}

