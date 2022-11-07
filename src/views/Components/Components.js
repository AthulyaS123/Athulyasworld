/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js"
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import Resume from "assets/PDF/Resume.pdf";
import Favorite from "@material-ui/icons/Favorite";
import 'animate.css';


import styles from "assets/jss/material-kit-react/views/components.js";
// import Warning from "components/Typography/Warning.js";
// import Info from "components/Typography/Info.js";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Athulya Saravanakumar"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "primary",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bgmain4.jpg").default}
      >
        <div className={classes.container}>
        <div className={classes.brand}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h3 className="animate__animated animate__lightSpeedInLeft animate__slower">
                Innovate, Lead, Inspire <Favorite style={{fill: "darkblue"}} className={classes.icon} />
                 </h3 >
                 </GridItem>
                 <GridItem xs={12} sm={12} md={8}>
                <h4 className="animate__animated animate__lightSpeedInRight animate__slower">
                  I am a senior at the Math and Science Academy in Dulles High School. I am a passionate computer scientist, researching in the feild of 
                  Artifical Intelligence, Autonomous Robotics, and Bioinformatics.

                I have lead many programming teams and showcase compassion,
                hardwork, leadership. I  spread the knowledge of STEM to others and encourge women to join through outreach to my community.</h4>
                         <Button
                         className="animate__animated animate__rollIn animate__slower"
                            color="rose"
                            size="lg"
                            href = {Resume}
                            target = "_blank"
                            >
                            <i className="title" />
                            Resume
                          </Button>
                          
              </GridItem>
          </GridContainer>
          </div>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
      </div>
      <Footer />
    </div>
  );
}

