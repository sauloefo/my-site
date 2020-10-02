import React from "react";
import indexStyle from "./index.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import favicon from "../components/images/favicon.png";
import { Helmet } from "react-helmet";

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
    <div>
      <Helmet
        title="Saulo Oliveira: XP, Kanban, System Thinking, Antifragility"
        meta={[
          {
            name: "description",
            content: "Saulo Oliveira: Software Development Specialist driven by XP, Kanban, System Thinking and Antifragility."
          },
          {
            name: "keywords",
            content: "XP, Kanban, System Thinking, Antifragility"
          }
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` }
        ]}
      />
      <main role="main" className="container mt-3">
        <div className="row">
          <div className="col col-12 col-lg">
            <h1 className="mb-5">Saulo Oliveira</h1>
            <div>
              <p>Software Development Specialist driven by</p>
              <p>Extreme Programming, Kanban, System Thinking &#38; Antifragility.</p>
            </div>
          </div>
          <div className="col col-lg-auto">
            <ShowContactsInfo contactsInfo={contactsInfo} />
          </div>
        </div>
      </main>
      <footer className={indexStyle.footerStyle}>
        <div class="container text-center mb-5">
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
        </div>
      </footer>
    </div>
  );
};
