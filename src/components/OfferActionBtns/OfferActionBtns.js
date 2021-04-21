import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/offerActionBtns.js";
import Button from "../CustomButtons/Button";
import classNames from "classnames";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function OfferActionBtns(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div className={classNames(classes.main)}>
            <Button color="success" className={classNames(classes.btn)}>Откликнуться</Button>
            <Button color="danger" className={classNames(classes.btn)}>Отклонить</Button>
        </div>

    );
}

