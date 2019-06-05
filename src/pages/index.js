import React from "react";
import indexStyle from "./index.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import ShowContactsInfo from "../components/ShowContactsInfo/";

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
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-12 col-lg">
          <h1>Saulo Oliveira</h1>
          <h4>Solution Architect & Salesforce Specialist</h4>
        </div>
        <div className="col col-lg-auto">
          <ShowContactsInfo contactsInfo={contactsInfo} />
        </div>
      </div>
    </div>
  );
};
