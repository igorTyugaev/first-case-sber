import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/offerActions.js";
import Button from "../CustomButtons/Button";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Badge from "../Badge/Badge";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function OfferActions(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div className={classNames(classes.main)}>
            <Button color="success" className={classNames(classes.btn)}>Принять</Button>
            <Button color="danger" className={classNames(classes.btn)}>Отклонить</Button>
        </div>
    );
}

