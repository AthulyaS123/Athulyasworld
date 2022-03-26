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
// import Sparkle from "@material-ui/icons/Star"
// import Parallax from "components/Parallax/Parallax.js";
// import Card from "components/Card/Card.js";
// import image1 from "assets/img/bg.jpg";
// import image2 from "assets/img/bg2.jpg";
// import image3 from "assets/img/bg3.jpg";
// import Carousel from "react-slick";
import ReactPlayer from "react-player"

import {useInput} from './useInput';
import Quote from "components/Typography/Quote";
import Warning from "components/Typography/Warning";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import JobImage from "assets/img/experiencesImg/job1.png"
import DullesRobo from "assets/img/experiencesImg/Firstrobo.jpg"
import CFM from "assets/img/experiencesImg/bioinformatics.jpg"
import MAO from "assets/img/experiencesImg/PicMao.jpg"
import GirlBytes from "assets/img/experiencesImg/girlbyes.jpg"
import CSpic from "assets/img/experiencesImg/cspic.jpg"

import CardHeader from "components/Card/CardHeader.js";
// import Primary from "components/Typography/Primary";





const useStyles = makeStyles(styles);


export default function SectionBasics() {
  
  const classes = useStyles();
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
            <div className={classNames(classes.main, classes.mainRaised)}>
          <div >
          <div className={classes.container}> 
              <div id="awards"><h6><small>.</small></h6></div>
                <NavPills 
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Experience",
                      tabIcon: Person,
                      tabContent: (
                        <GridContainer  justify="center">
                          <GridItem justify="left" xs={12} sm={12} md={4}>
                          <br />
                          <br />
                          <Card style={{width: "20rem"}}>
                          <CardHeader className={classes.cardTitle} color="warning"><Work style={{fill: "blue"}}/>  Work Experience</CardHeader>
                          <img
                          style={{height: "100%", width: "100%", display: "block"}}
                          className={JobImage}
                          src={JobImage}
                          />
                          <CardBody>
                          <h3 className={classes.cardTitle}>Codeverse</h3>
                          <h4 className={classes.cardSubtitle} > Rank 2 Instructor 05/2021 - Present</h4>
                          <p>Programmed/debugged a game for the seasonal Codeverse Show Case event. Resolved software and hardware issues for client and manager side. Administered daily/weekly programming class for ages 5-15. Initiated new methods and content of teaching curriculum. Skills used: JavaScript, Object Oriented Programming, Game Design</p>
                          </CardBody>
                          </Card>
                        </GridItem>

                          <GridItem justify="center" xs={12} sm={12} md={4}>
                          <br />
                          <br />
                          <Card style={{width: "20rem"}}>
                          <CardHeader className={classes.cardTitle} color="info"> <PersonOutline style={{fill: "blue"}} /> Leadership</CardHeader>
                          <img
                          style={{height: "100%", width: "100%", display: "block"}}
                          className={CFM}
                          src={CFM}
                          />
                          <CardBody>
                          <h3 className={classes.cardTitle}>National Coding For Medicine Club</h3>
                          <h4 className={classes.cardSubtitle} >Founder and President 2020-Present</h4>
                          <p>Runs and manages Coding For Medicine Club where the members work with bioinformatics. Leads the research project, planning and guiding the members. Creates cirriculum and materials for meetings and workshops. Delgates tasks to others in the leadership team such as recrutiment and communication. </p>
                          </CardBody>
                          </Card>
                        </GridItem>

                        <GridItem justify="center" xs={12} sm={12} md={4}>
                        <br />
                        <br />
                          <Card style={{width: "20rem"}}>
                          <CardHeader className={classes.cardTitle} color="info"> <PersonOutline style={{fill: "blue"}} /> Leadership</CardHeader>
                          <img
                          style={{height: "100%", width: "100%", display: "block"}}
                          className={DullesRobo}
                          src={DullesRobo}
                          />
                          <CardBody>
                          <h3 className={classes.cardTitle}>Fort Bend Robotics</h3>
                          <h4 className={classes.cardSubtitle} >Vice President/Outreach Lead 2019 - Present</h4>
                          <p>Helped run competitions as League Host for over 15 teams in Houston area. Progammed the robot and won multiple awards, contributed to State Championship. Managed the club and members by teaching programming and presentation skills. Hosted events and outreach to community to spread STEM. Helped spread awarness and bring more women into STEM.</p>
                          </CardBody>
                          </Card>
                        </GridItem>

                        <GridItem justify="center" xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                          <CardHeader className={classes.cardTitle} color="info"> <PersonOutline style={{fill: "blue"}} /> Leadership</CardHeader>
                          <img
                          style={{height: "100%", width: "100%", display: "block"}}
                          className={MAO}
                          src={MAO}
                          />
                          <CardBody>
                          <h3 className={classes.cardTitle}>Mu Alpha Theta Honor Society</h3>
                          <h4 className={classes.cardSubtitle} >Volunteer Manager 2019 - Present</h4>
                          <p>Helped run Math and Science Night, inviting 30+ STEM related companies for 150+ elementary students. Volunteer at Colony Meadow Elementary to create cirriculum and teach kids contest math. Managed and ran the social media accounts for advertisements/recruitment. Managed point system on spread sheet and forms of communications via email, Remind App, social media, etc.</p>
                          <ReactPlayer
                            url="https://youtu.be/TOjKqbCF4gQ"
                            width="250px"
                            height="100%"
                            />
                          </CardBody>
                          </Card>
                          <br />
                        </GridItem>

                        <GridItem justify="center" xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                          <CardHeader className={classes.cardTitle} color="info"> <PersonOutline style={{fill: "blue"}} /> Leadership</CardHeader>
                          <img
                          style={{height: "100%", width: "100%", display: "block"}}
                          className={CSpic}
                          src={CSpic}
                          />
                          <CardBody>
                          <h3 className={classes.cardTitle}>Dulles Computer Science </h3>
                          <h4 className={classes.cardSubtitle} >Novice UIL Coach 2019 - Present</h4>
                          <p>Create UIL Computer Science cirriculum to teach members and prepare them for various contest. Create practice problems for members to work on. Coded the club's website. Attened UIL competitions at state level. Helped manage point system.</p>
                          </CardBody>
                          </Card>
                          <br />
                        </GridItem>

                        <GridItem justify="center" xs={12} sm={12} md={4}>
                          <Card style={{width: "20rem"}}>
                          <CardHeader className={classes.cardTitle} color="success"> <Favorite style={{fill: "blue"}}/> Volunteering</CardHeader>
                          <img
                          style={{height: "100%", width: "100%", display: "block"}}
                          className={GirlBytes}
                          src={GirlBytes}
                          />
                          <CardBody>
                          <h3 className={classes.cardTitle}>Dulles Girl Bytes </h3>
                          <h4 className={classes.cardSubtitle} > Volunteer 2021 - Present</h4>
                          <p>Created cirriculum and taught at programming workshops like HTML, Java, and web development meant to inspire women to join STEM. Volunteer at Dulles Middle School, training Technovation teams by teaching them web development and strategies. Help spread awarness of the lack of females in STEM through social media. </p>
                          </CardBody>
                          </Card>
                          <br />
                        </GridItem>


                          
                        </GridContainer>
                      ),
                    },

                    {
                      tabButton: "Projects",
                      tabIcon: Apps,
                      tabContent: (
                        <GridContainer  justify="center">
                        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                        <h2 > <Robo style={{fill: "blue"}} /> <CS style={{fill: "blue"}} /> Robotics, AI, Bioinformatics, Web Dev</h2>
                        </GridItem>      
                        <GridContainer  justify="center">
                          
                        <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "22rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"> </CardHeader>
                        <h3 className={classes.cardTitle}>FTC Autonomous Robot </h3>
                        <h4 className={classes.cardSubtitle} >05/2021 </h4>
                        <p>Coded autonomus for FIRST Tech Challenge: Ultimate Goal using Trajectory Motion/Object Detection. Skills used: Java, EasyOpenCV, PID, RoadRunner, Git</p>
                        <ReactPlayer
                          url="https://youtu.be/9pZk6KUO7dI"
                          playing={true}
                          loop={true}
                          width="300px"
                          height="100%"                          />
                        </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "22rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"> </CardHeader>
                        <h3 className={classes.cardTitle}>Robot Simulation: PID </h3>
                        <h4 className={classes.cardSubtitle} >07/2021 </h4>
                        <p>Coded autonomus robot simulation on Robot Operating System that follows a path using a control system: PID. Skills Used: ROS, Gazebo, PID, C, Git</p>
                        <ReactPlayer
                          url="https://youtu.be/ZTdhinERBz0"
                          playing={true}
                          loop={true}
                          width="300px"
                          height="100%"                          />
                        </CardBody>
                        </Card>
                      </GridItem>

                      
                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "22rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"> </CardHeader>
                        <h3 className={classes.cardTitle}>Real-Time Object Detection</h3>
                        <h4 className={classes.cardSubtitle} >12/2021</h4>
                        <p>Coded real-time object detection on video using AI framework: YOLO. Skills Used: Python, AI/ML, Tensorflow, OpenCV</p>
                        <ReactPlayer
                          url="https://youtu.be/jvuX2wJNvXg"
                          playing={true}
                          loop={true}
                          width="300px"
                          height="100%"
                          />
                        </CardBody>
                        </Card>
                      </GridItem>

                        <GridItem justify="left" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"> </CardHeader>
                        <h3 className={classes.cardTitle}>CFM Scholarly Research Project</h3>
                        <h4 className={classes.cardSubtitle} >2021 - Present </h4>
                        <p>Research on Balanophora (Hemiparasitic Plants). Skills Used: Biopython, MUSCLE, NCBI Blast, and Linux</p>
                        <Button
                        color="rose"
                        > 
                          Publishing Soon
                        </Button>
                        </CardBody>
                        </Card>
                      </GridItem>

                        <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>Athulya Saravanakumar Website</h3>
                        <h4 className={classes.cardSubtitle} >10/2021</h4>
                        <p>Coded a website portfolio (this website!) for myself for clients and the industry too see. Skills Used: Java Script, Material UI, Git</p>
                        </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>Dulles Computer Science Website</h3>
                        <h4 className={classes.cardSubtitle} >2021</h4>
                        <p>Coded a website for a school organization from scratch. Skills Used: JavaScript</p>
                        <Button
                        color="rose"
                        href="https://dullescomputerscience.club/"
                        target = "_blank"
                        > 
                          Check it Out
                        </Button>
                        </CardBody>
                        </Card>
                      </GridItem>

                      </GridContainer>
                      </GridContainer>
                      ),
                    },

                    {
                      tabButton: "Awards",
                      tabIcon: Grade,
                      tabContent: (
                        <GridContainer  justify="center">
                      <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                        <h2 > <CS style={{fill: "blue"}} /> Computer Science</h2>
                        </GridItem>
                        <GridContainer  justify="center">
                        <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="warning"></CardHeader>
                        <h3 className={classes.cardTitle}>NCWIT Houston Affiliate Winner</h3>
                        <h4 className={classes.cardSubtitle} >02/2022</h4>
                        </CardBody>
                        </Card>
                      </GridItem>  

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="warning"></CardHeader>
                        <h3 className={classes.cardTitle}>Digital Divas HackerRank 2nd Place </h3>
                        <h4 className={classes.cardSubtitle} >03/2021</h4>
                        </CardBody>
                        </Card>
                      </GridItem>  

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>NCWIT Houston Affiliate Honorable Mention</h3>
                        <h4 className={classes.cardSubtitle} > 2019-2020 and 2020-2021</h4>
                        </CardBody>
                        </Card>
                      </GridItem>  

                      <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                        <h2 > <Robo style={{fill: "blue"}} /> Robotics</h2>
                        </GridItem>
                        <GridContainer  justify="center">
                        <GridItem justify="left" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="warning"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Tech Challenge Dean's List Finalist</h3>
                        <h4 className={classes.cardSubtitle} >05/2021</h4>
                        </CardBody>
                        </Card>
                      </GridItem>

                        <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Tech Challenge Regional Championships - Qualify for State</h3>
                        <h4 className={classes.cardSubtitle} >05/2021</h4>
                        </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Tech Challenge Inspire Award</h3>
                        <h4 className={classes.cardSubtitle} >05/2021</h4>
                        </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Tech Challenge Control Award</h3>
                        <h4 className={classes.cardSubtitle} >05/2021</h4>
                        </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>

                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Robotics Challenge District Engineering Inspiration Award</h3>
                        <h4 className={classes.cardSubtitle} > 2019 - 2020</h4>
                        </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Robotics Challenge Safety Award </h3>
                        <h4 className={classes.cardSubtitle} >2019-2020</h4>
                        </CardBody>
                        </Card>
                      </GridItem> 

                                            <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Tech Challenge Collins Aerospace Innovate Award</h3>
                        <h4 className={classes.cardSubtitle} >2019-2020</h4>
                        </CardBody>
                        </Card>
                      </GridItem> 

                                            <GridItem justify="center" xs={12} sm={12} md={4}>
                        <Card style={{width: "20rem"}}>
                        <CardBody>
                        <CardHeader className={classes.cardTitle} color="primary"></CardHeader>
                        <h3 className={classes.cardTitle}>FIRST Tech Challenge Control Award </h3>
                        <h4 className={classes.cardSubtitle} >2019-2020</h4>
                        </CardBody>
                        </Card>
                      </GridItem>  

                      </GridContainer>
                      </GridContainer>
                      </GridContainer>
                      ),
                    },
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
                              <h4>AI/ML</h4>
                              <CustomLinearProgress
                                variant="determinate"
                                color="warning"
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
                              <Badge color="rose">Open CV </Badge>
                              <br />
                              <h4>Hardware</h4>
                              <Badge color="primary">Rev Robotics</Badge>
                              <Badge color="info">Arduino</Badge>
                              <Badge color="success">Raspberry Pi</Badge>
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
                    
                  ]}
                  
                />
            </div>
      </div>
    </div>
    <br />
    <br />

    <Card>
      <CardHeader color="primary">Fort Bend Roboitcs</CardHeader>
      <CardBody>
      <Warning>

      <Quote
                text="Athulya joined us in 2019 as our 1st and only female programmer since we started FIRST Robotics teams in 2016. She is now leading our programming teams."
                author="Officer Team"
              />
                            </Warning>

      </CardBody>
    </Card>

<br />
    <Card>
      <CardHeader color="primary">Coding For Medicine</CardHeader>
      <CardBody>
      <Warning>
              <Quote
                text="Coding for Medicine clubs are expanding [nationally as] Athulya Saravanakumar [founded] Coding for Medicine club [...]. Their club is doing well with 18 members and is currently in its second year."
                author="Dr. Samantha (PhD Biology)"
              />
              </Warning>

      </CardBody>
    </Card>


            

    
      <div id="contactMe" className={classes.section }>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
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
    <div >
    {/* <img src={"assets/img/womaninstem.jpg"} />
      <div className={classes.container}>
        <div className={classes.title} >
          <div id="athulya"><h6><small>.</small></h6></div> 
          <br />
          <br />
        </div>
        <div > */}
    </div>
    </div>
    </div>
    </div>
    // </div>

  );
}

