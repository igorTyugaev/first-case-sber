import React from "react";
// @material-ui/core components
// nodejs library that concatenates classes
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/profileAboutOrder.js";
import Typography from "@material-ui/core/Typography";
// core components
const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function ProfileAboutOrder(props) {
    const classes = useStyles();
    const {name} = props.product;
    const {desc} = props.product;

    return (
        <div className={classNames(classes.main)}>
            <h3 className={classes.title}>{name}</h3>
            <p className={classNames(classes.description)}>
                {desc}
            </p>
            <Typography variant="subtitle1" color="textPrimary" component="p">
                Стоимость заказа: от <span
                style={{fontWeight: "bold", color: "#000", textAlign: "center"}}>{200}{"₽"}</span> до <span
                style={{fontWeight: "bold", color: "#000", textAlign: "center"}}>{300}{"₽"}</span>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
                Кол-во дней на выполнение заказа: <span
                style={{fontWeight: "bold", color: "#000", textAlign: "center"}}>{5}</span>
            </Typography>
        </div>
    );
}

