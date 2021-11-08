/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Linkden, CloudDownload, Email, LinkedIn } from "@material-ui/icons";


// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import "views/Components/Sections/SectionBasics"
import Favorite from "@material-ui/icons/Favorite";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (

  <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About Me"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Favorite}
          dropdownList={[
            <a
              href="#athulya"
              className={classes.dropdownLink}>
              Who am I
            </a>,
                      <a
                      href="#awards"
                      className={classes.dropdownLink}
                      >
                      Skills, Experience, Awards, & Projects
                      </a>,
                    
            
          ]}
        />
      </ListItem>

{/* <ListItem className={classes.listItem}>
        <Tooltip
          id="aboutme"
          title="All About Me!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#aboutMe"
            color="transparent"
            className={classes.navLink}
          >
        <Favorite className={classes.icons} />          
        </Button>
        </Tooltip>
  </ListItem> */}

      <ListItem className={classes.listItem}>
        <Tooltip
          id="email"
          title="Email Me :)"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#contactMe"
            color="transparent"
            className={classes.navLink}
          >
        <Email className={classes.icons} />          
        </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Follow me on Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.github.com/AthulyaS123"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkden"
          title="Check out my linkden"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://linkedin.com/in/athulyasaravanakumar"
            target="_blank"
            className={classes.navLink}
          >
        <LinkedIn className={classes.icons} />           
        </Button>
        </Tooltip>
      </ListItem>

    </List>
  );
}
