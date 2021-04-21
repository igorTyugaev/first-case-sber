import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components

import styles from "assets/jss/material-kit-react/components/userAboutHeader.js";
import classNames from "classnames";
import CustomerCard from "../CustomerCard/CustomerCard";
import CustomerSummary from '../CustomerSummary/CustomerSummary';

const useStyles = makeStyles(styles);

export default function CustomerAboutHeader(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div className={classes.body}>
            <div className={classNames(classes.card)}>
                <CustomerCard/>
            </div>
            <div className={classNames(classes.summary)}>
                <CustomerSummary/>
            </div>
        </div>
    );
}

CustomerAboutHeader.propTypes = {};