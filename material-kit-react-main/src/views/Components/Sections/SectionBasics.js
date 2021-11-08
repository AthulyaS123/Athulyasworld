/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import * as emailjs from 'emailjs-com';
import { makeStyles } from "@material-ui/core/styles";
import Apps from "@material-ui/icons/Apps";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Badge from "components/Badge/Badge.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Grade from "@material-ui/icons/Grade";
import Person from "@material-ui/icons/Person";
import PanTool from "@material-ui/icons/Build"
import CS from "@material-ui/icons/Laptop"
import Robo from "@material-ui/icons/Settings"

import NavPills from "components/NavPills/NavPills.js";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import classNames from "classnames";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js"
import Work from "@material-ui/icons/Work";
import PersonOutline from "@material-ui/icons/PersonOutline";
import Favorite from "@material-ui/icons/Favorite";
import Parallax from "components/Parallax/Parallax.js";


// import Card from "components/Card/Card.js";
// import image1 from "assets/img/bg.jpg";
// import image2 from "assets/img/bg2.jpg";
// import image3 from "assets/img/bg3.jpg";
// import Carousel from "react-slick";
import ReactPlayer from "react-player"

import {useInput} from './useInput';
import Quote from "components/Typography/Quote";
import Warning from "components/Typography/Warning";



const useStyles = makeStyles(styles);


export default function SectionBasics() {
  
  const classes = useStyles();
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 900,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };
  const { value:user_name, bind:binduser_name, reset:resetuser_name } = useInput('');
  const { value:user_email, bind:binduser_email, reset:resetuser_email } = useInput('');
  const { value:user_message, bind:binduser_message, reset:resetuser_message } = useInput('');
  
  const sendEmail = (e) => {
    
    e.preventDefault();
    console.log("i am clicked", {user_email},{user_name},{user_message});
    emailjs.sendForm('arthiatsr_gmail_com', 'reach_friend', "#messageFormClass", 'user_6E17hEsOwkfjk6uHyijD7')
    .then((res) => {console.log(res.text);
      resetuser_name();
      resetuser_email();
      resetuser_message(); 
    }, (error) => {console.log(error.text);
    });
  }
  
  return (
    <div className={classes.sections}>
            <div className={classes.title}>
            <div className={classes.container}>
      <h2>Who is Athulya?</h2>
      </div> 
      </div>
            <Parallax image={require("assets/img/womaninstem.jpg").default}></Parallax>
      <div className={classes.container}>
        <div className={classes.title} >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div id="athulya"><h6><small>.</small></h6></div> 
          <br />
          <br />
        </div>
        <div >
          <div className={classes.title}>
            <h3>
              Athulya is a junior at Dulles High School. She became interested and began coding at only 8 years old.
              She is on the FIRST Robotics team, Computer Science, Mu Alpha Theta, Girl Bytes, and founder of
              the Coding for Medicine club at her school. 
              <br />
              <br />
              <Warning>
              <Quote
                text="Athulya is the 1st and only female programmer we have had since we started FIRST Robotics teams in 2016. She is now leading our programming teams."
                author="Dulles Robotics"
              />
              </Warning>
              She has grown to become a lead for programming. She is compassionate,
              hardworking, and loves to work with others. She is very passionate
              to continue developing her programming skills while spreading the
              knowledge of STEM to others and encouraging women in STEM.
              <div id="awards"><h6><small>.</small></h6></div>
            </h3>
            <div className={classNames(classes.main, classes.mainRaised)}>
          <div >
          <div className={classes.container}>  
          <GridContainer  justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills 
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Skills",
                      tabIcon: PanTool,
                      tabContent: (
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                              <div className={classes.title}>
                                <h3>Programming</h3>
                              </div>
                              <h4> Java</h4>
                              <CustomLinearProgress
                                variant="determinate"
                                color="primary"
                                value={80}
                              />
                              <h4>Python</h4>
                              <CustomLinearProgress
                                variant="determinate"
                                color="rose"
                                value={60}
                              />
                              <h4>C</h4>
                              <CustomLinearProgress
                                variant="determinate"
                                color="info"
                                value={40}
                              />
                              <h4>JavaScript/HTML/CSS</h4>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={30}
                              />
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <div className={classes.title}>
                                <h3> Skills </h3>
                              </div>
                              <h4>Programming Languages</h4>
                              <Badge color="primary">Java</Badge>
                              <Badge color="info">Python</Badge>
                              <Badge color="success">JavaScript</Badge>
                              <Badge color="warning">HTML</Badge>
                              <Badge color="danger">CSS</Badge>
                              <Badge color="rose">C</Badge>
                              <Badge color="primary">BioPython</Badge>
                              <Badge color="primary">Material UI</Badge>
                              <Badge color="info">React</Badge>
                              <Badge color="success">Heroku</Badge>
                              <Badge color="warning">Git</Badge>
                              <Badge color="danger">Github</Badge>
                              <br />
                              <h4>Software</h4>
                              <Badge color="primary">Andriod Studio</Badge>
                              <Badge color="info">Intelji</Badge>
                              <Badge color="warning">Visual Studio</Badge>
                              <Badge color="danger">JGrasp </Badge>
                              <br />
                              <h4>Hardware</h4>
                              <Badge color="primary">Rev Robotics</Badge>
                              <Badge color="info">Arduino</Badge>
                              <Badge color="success">Lime Light</Badge>
                              <br />
                              <h4>Nontechnical</h4>
                              <Badge color="primary">Public Speaking</Badge>
                              <Badge color="info">Presentation</Badge>
                              <Badge color="rose">Marketing</Badge>
                              <Badge color="danger">Business</Badge>
                            </GridItem>
                          </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Experience",
                      tabIcon: Person,
                      tabContent: (
                        <GridContainer  justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                           <h2> <Work style={{fill: "blue"}}/> Work Experience </h2>
                           <Warning><h3> Codeverse: Rank 1 Instructor <small>05/2021 - Present</small></h3></Warning>
                            <br />
                            <h2><PersonOutline style={{fill: "blue"}} /> Leadership</h2>
                            <h3> FIRST Tech Challenge Team #13822 and Dulles Robotics: Programming Lead <small> - 2019 - Present</small></h3>
                            <h3> Dulles Robotics: Presentation and Outreach Lead<small> - 2020 - Present</small></h3>
                            <h3> Dulles Coding For Medicine Club: Founder and Vice President<small> - 2020 - Present</small></h3>
                            <h3> Mu Alpha Theta Honor Society: Volunteer Manager <small> - 2020 - Present</small></h3>
                            <h3> Dulles Computer Science: Novice Coach <small> - 2021 - Present</small></h3>
                            <br />
                            <h2><Favorite style={{fill: "blue"}}/> Volunteering</h2>
                            <h3> FIRST Scratch Camp: Event Coordinator <small> 08/2020</small></h3>
                            <h3> Girl Bytes Programming Workshops: Instructor <small> - 2021 - Present</small></h3>
                            <h3> First Colony Library Robotics Workshop: Instructor <small> - 2021 - Present</small></h3>
                            <h3> Common Wealth Elementary Contest Math: Instructor <small> - 2021 - Present</small></h3>
                            <br />
                            <ReactPlayer
                            url="https://youtu.be/TOjKqbCF4gQ"
                            />
                          </GridItem>
                          
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Projects",
                      tabIcon: Apps,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <h2><Robo style={{fill: "blue"}} /> Robotics</h2>
                            <h3>Autonomous Robot - AI & Object Detection <small> 05/2021</small></h3>
                          <ReactPlayer
                          url="https://youtu.be/EUpkt1JOcjc"
                          />
                        <br />
                        <h3>Lime Light Detection + some team spirit :)</h3>
                        <ReactPlayer
                            url="https://youtu.be/jbo6bE3lYoE"
                            />
                            <br />
                          <h3>NASA TechRise - Landing Systems<small> 2021-2023</small></h3>
                          <br />
                          <h2><CS  style={{fill: "blue"}}/> Computer Science</h2>
                          <h3>Coding For Medicine Scholarly Research Project<small> 2021-2022</small></h3>
                          <br />
                          <h3>Athulya's World Website (this one!) <small> - (coded using JavaScript)</small> <small> 10/2021</small></h3>
                          <br />
                          <h3>Computer Science Club Website <small> - (coded using JavaScript)</small> <small> 2021</small></h3>
                          <Button
                            color="rose"
                            size="lg"
                            href="https://dullescomputerscience.club/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <i className="title" />
                            CS Club Wesbite
                          </Button>
                          <br />
                          <h3>More to Come!</h3>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Awards",
                      tabIcon: Grade,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <h2><Robo style={{fill: "blue"}} /> Robotics</h2>
                            <Warning><h3>FIRST Tech Challenge Dean's List Finalist <small> - 05/2021</small></h3></Warning>
                            <h3>FIRST Tech Challenge Regional Championships - Qualify for State <small> - 05/2021</small></h3>
                            <h3>FIRST Tech Challenge Inspire Award <small> - 05/2021</small></h3>
                            <h3>FIRST Tech Challenge Control Award <small> - 05/2021</small></h3>
                            <h3>FIRST Robotics Challenge District Engineering Inspiration Award<small> - 2019-2020</small></h3>
                            <h3>FIRST Robotics Challenge Safety Award<small> - 2019-2020</small></h3>
                            <h3>FIRST Tech Challenge Collins Aerospace Innovate Award<small> - 2019-2020</small></h3>
                            <h3>FIRST Tech Challenge Control Award <small> - 2019-2020</small></h3>
                          <br />
                          {/* hello */}
                          <h2><CS style={{fill: "blue"}} /> Computer Science</h2>
                         <Warning> <h3>Digital Divas HackerRank 2nd Place<small> - 03/2021</small></h3> </Warning>
                            <h3>USACO Bronze<small> - 01/2021</small></h3>
                            <h3>NCWIT Houston Affiliate<small> - 2020-2021</small></h3>
                            <h3>NCWIT Houston Affiliate<small> - 2019-2020</small></h3>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    
                  ]}
                />
              </GridItem>
            </GridContainer>
            </div>
      </div>
    </div>
        {/* <div id="aboutMe" className={classes.space70} />
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Programming</h3>
              </div>
              <h4> Java</h4>
              <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={80}
              />
              <h4>Python</h4>
              <CustomLinearProgress
                variant="determinate"
                color="rose"
                value={60}
              />
              <h4>C</h4>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={40}
              />
              <h4>JavaScript/HTML/CSS</h4>
              <CustomLinearProgress
                variant="determinate"
                color="success"
                value={30}
              />
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <div className={classes.title}>
                <h3> Skills </h3>
              </div>
              <h4>Programming Languages</h4>
              <Badge color="primary">Java</Badge>
              <Badge color="info">Python</Badge>
              <Badge color="success">JavaScript</Badge>
              <Badge color="warning">HTML</Badge>
              <Badge color="danger">CSS</Badge>
              <Badge color="rose">C</Badge>
              <Badge color="primary">BioPython</Badge>
              <Badge color="primary">Material UI</Badge>
              <Badge color="info">React</Badge>
              <Badge color="success">Heroku</Badge>
              <Badge color="warning">Git</Badge>
              <Badge color="danger">Github</Badge>
              <br />
              <h4>Software</h4>
              <Badge color="primary">Andriod Studio</Badge>
              <Badge color="info">Intelji</Badge>
              <Badge color="warning">Visual Studio</Badge>
              <Badge color="danger">JGrasp </Badge>
              <br />
              <h4>Nontechnical</h4>
              <Badge color="primary">Public Speaking</Badge>
              <Badge color="info">Presentation</Badge>
              <Badge color="warning">Marketing</Badge>
              <Badge color="danger">Business</Badge>
            </GridItem>
          </GridContainer>
        </div>
      </div>
       */}
        {/* <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img alignCenter src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div> */}
    
      <div id="contactMe" className={classes.section }>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <br />
          <br />
          <h2 className={classes.title}>Contact Me</h2>
          <h4 className={classes.description}>
           Want to get to know me better? Please contact me via email! I would love to get to know you better too, thank you for checking out my website! <Favorite></Favorite>
          </h4>
          <form id="messageFormClass"  onSubmit={sendEmail}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                               
                  formControlProps={{ 
                    type:"text", 
                    id:"user_name" ,  
                    name:user_name,  
                    ...binduser_name,
                    fullWidth: true,                   
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput                                 
                  labelText="Your Email"
                  formControlProps={{
                    type:"email",
                    id:"user_email",
                    name:user_email,
                    ...binduser_email,                      
                    ...binduser_email,  
                    fullWidth: true, 
                  }}
                />
              </GridItem>
              <CustomInput               
                labelText="Your Message"                                                                         
                formControlProps={{ 
                  type:"text",
                  id:"user_message", 
                  name:user_message,
                  fullWidth: true,
                  ...binduser_message,  
                  className: classes.textArea,                  
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,      
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
              {/* <input type="submit"  value="Send"  />    */}
                <Button color="primary" onClick={sendEmail}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
    </div>
    </div>
    </div>
    </div>

  );
}
