import React from "react";
import indexStyle from "./index.module.css";

import favicon from "../components/images/favicon.png";
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import ShowContactsInfo from "../components/ShowContactsInfo/";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  appFrame: {
    height: '100%'
  }
}));

const contactsInfo = [
  {
    type: "github",
    href: "https://github.com/sauloefo",
    description: "Go to Saulo's GitHub profile",
    openInNewTab: true,
    imageCssClass: indexStyle.socialMediaLogo,
    label: "github.com/sauloefo"
  },
  {
    type: "linkedin",
    href: "https://linkedin.com/in/sauloefo",
    description: "Go to Saulo's LinkedIn profile",
    openInNewTab: true,
    imageCssClass: indexStyle.socialMediaLogo,
    label: "linkedin.com/in/sauloefo"
  },
  {
    type: "twitter",
    href: "https://twitter.com/sauloefo",
    description: "Go to Saulo's Twitter page",
    openInNewTab: true,
    imageCssClass: indexStyle.socialMediaLogo,
    label: "twitter.com/sauloefo"
  },
  {
    type: "goodreads",
    href: "https://goodreads.com/sauloefo",
    description: "Go to Saulo's Good Reads profile",
    openInNewTab: true,
    imageCssClass: indexStyle.socialMediaLogo,
    label: "goodreads.com/sauloefo"
  },
  {
    type: "email",
    emailAddress: "contact@sauloefo.com",
    description: "Send an email to Saulo",
    openInNewTab: false,
    imageCssClass: indexStyle.socialMediaLogo,
    label: "contact@sauloefo.com"
  }
];

export default () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Helmet
        title="Saulo Oliveira - Software Developement Specialist"
        meta={[
          {
            name: "description",
            content: "Saulo Oliveira - Software Developement Specialist"
          },
          {
            name: "keywords",
            content: "XP, Kanban, System Thinking, Antifragility"
          }
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` },
          { rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" }
        ]}
      />
      <Container maxWidth="md">
        <Paper className={classes.root} square={true} elevantion={2}>
          <main height={classes.appFrame.height}>
            <div>
              <h1>Saulo Oliveira</h1>
              <h4>Software Development Specialist driven by XP, Kanban, System Thinking &#38; Antifragility.</h4>
            </div>
            <div>
              <ShowContactsInfo contactsInfo={contactsInfo} />
            </div>
          </main>

          <footer> 
            Favicon made by{" "}
            <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
              iconixar
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </footer>
        </Paper>
      </Container>
      
    </React.Fragment>
  );
};