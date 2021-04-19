import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/badgeStyle.js";

const useStyles = makeStyles(styles);

export default function Skill(props) {
    const classes = useStyles();
    const {color, children} = props;
    return (
        <span className={classes.badge} style={("background: red") ? styles.complete : {}}>{children}</span>
    );
}
