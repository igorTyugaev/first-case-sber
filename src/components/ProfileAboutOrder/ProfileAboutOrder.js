import React from "react";
// @material-ui/core components
// nodejs library that concatenates classes
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/profileAboutOrder.js";
import Button from "../CustomButtons/Button";
import {Link} from "react-router-dom";
// core components
const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function ProfileAboutOrder(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div className={classNames(classes.main)}>
            <h3 className={classes.title}>Пупкин Иван</h3>
            <p className={classNames(classes.description)}>
                Парсер позволяет собирать: ссылки, населенный пункт, заголовок, описание, имя продавца и стоимость.
                Собираются данные организаций и юридических лиц. Для многопоточной работы программы необходимо отдельно
                приобрести прокси: IP4 прокси (https или socks) Для разгадывания капчи нужен ключ от сервиса
                распознавания. Поддерживается Рукапча.
            </p>
            <Button color="primary" size="lg" link className={classNames(classes.btn)}>
                просмотреть страницу профиля
            </Button>
        </div>
    );
}

