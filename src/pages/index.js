import React from "react"
import github_logo from "../components/images/github-logo.png"
import linkedin_logo from "../components/images/linkedin-logo.png"
import twitter_logo from "../components/images/twitter-logo.png"
import indexStyle from "./index.module.css";

import "./reset.css";

export default () => {
	return (
		<div>
			<div>
				<h1>Saulo Oliveira</h1>
				<h2>Solution Architect & Salesforce Specialist</h2>
			</div>
			<div>
				<a href="https://github.com/sauloefo">
					<img className={indexStyle.socialMediaLogo} src={github_logo} alt="Saulo's GitHub profile"/>
				</a>
			</div>
			<div>
				<a href="https://linkedin.com/in/sauloefo">
					<img className={indexStyle.socialMediaLogo} src={linkedin_logo} alt="Saulo's LinkedIn profile"/>
				</a>
			</div>
			<div>
				<a href="https://twitter.com/sauloefo">
					<img className={indexStyle.socialMediaLogo} src={twitter_logo} alt="Saulo's twitter profile"/>
				</a>
			</div>
		</div>
	)
}
