import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import SectionNavbars from "../Components/Sections/SectionNavbars";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HeaderLinksAuth from "../../components/Header/HeaderLinksAuth";
import HeaderLinksRole from "../../components/Header/HeaderLinksRole";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="FirstCase"
                leftLinks={<HeaderLinksRole/>}
                rightLinks={<HeaderLinksAuth/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />

            <Parallax filter image={require("assets/img/landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={13} sm={13} md={7}>
                            <h1 className={classes.title}>
                                ???????????? ?????????????????????? ?????? ?????????????? ?????????? ????????????!
                            </h1>
                            <h4>
                                ?????? ???????????????????????? ?????????????? ?????????????????????? ?????????? IT, ?????????????? ?????????????????????? ???????????????? ?????? ??????????
                                ????????????????
                            </h4>
                            <br/>
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play"/>
                                ???????????????? ??????????
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection/>
                    <TeamSection/>
                    <WorkSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
