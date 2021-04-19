import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import HeaderLinksRole from "../../components/Header/HeaderLinksRole";
import HeaderLinksAuth from "../../components/Header/HeaderLinksAuth";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Badge from "../../components/Badge/Badge";
import UserAboutHeader from "../../components/UserAboutHeader/UserAboutHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Email from "@material-ui/icons/Email";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import profileImage from "../../assets/img/faces/avatar.jpg";
import HeaderLinksProfile from "../../components/Header/HeaderLinksProfile";
import Typography from "@material-ui/core/Typography";

//List

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

// import {MDCList} from '@material/list';

export default function ProfilePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>
            <Header
                color="white"
                routes={dashboardRoutes}
                brand="FirstCase"
                rightLinks={<HeaderLinksProfile/>}
                fixed
                {...rest}
            />

            <div className={classNames(classes.main)}>
                <div className={classNames(classes.container)}>
                    <UserAboutHeader/>

                    <h3 className={classes.titleDescription}>О себе</h3>
                    <div className={classes.description}>
                        <p>Участник семинаров и вебинаров компании PROFI.RU:</p>
                        <ul>
                            <li>
                                «Успешная первая встреча с учеником – основа долговременных плодотворных занятий»;
                            </li>
                            <li>
                                «Экспресс-подготовка к ЕГЭ по английскому языку»;
                            </li>
                            <li>
                                «Полная и эффективная подготовка к ЕГЭ по английскому языку».
                            </li>
                        </ul>
                    </div>

                    <h3 className={classes.titleDescription}>Образование</h3>
                    <div className={classes.description}>
                        <ul>
                            <li>МГУ им. М.В. Ломоносова, филологический факультет, специальность – филолог,
                                преподаватель
                                английского и французского языков (1992 г.)
                            </li>
                        </ul>
                    </div>

                    <h3 className={classes.titleDescription}>Опыт</h3>
                    <div className={classes.description}>
                        <ul>
                            <li>Репетиторская деятельностьс 1995 г. (26 лет)</li>
                            <li>Педагогический стаж (преподавал английский язык на филфаке МГУ; курсы английского языка,
                                курсы IELTS и TOEFL, GRE, GMAT)с 1998 г. (23 года)
                            </li>
                            <li>На сервисе с февраля 2011 г. (10 лет)</li>
                        </ul>
                    </div>

                    <h3 className={classes.titleDescription}>Дополнительная информация</h3>
                    <div className={classes.description}>
                        <p>
                            Репетитор сдал тест методистов — экспертов Профи с заданиями уровня ЕГЭ, GMAT и олимпиад по
                            английскому языку.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
