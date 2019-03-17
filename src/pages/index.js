import React from "react"
import email_logo from "../components/images/email-logo.png"
import github_logo from "../components/images/github-logo.png"
import linkedin_logo from "../components/images/linkedin-logo.png"
import twitter_logo from "../components/images/twitter-logo.png"
import indexStyle from "./index.module.css"

import "bootstrap/dist/css/bootstrap.min.css"

export default () => {
	return (
	<div className="container mt-3">
		<div className="row">
			<div className="col">
				<h1>Saulo Oliveira</h1>
				<h4>Solution Architect & Salesforce Specialist</h4>
			</div>
			<div className="col col-auto">
				<ul className="list-group">
					<li className="list-group-item">
						<a href="mailto:contact@sauloefo.com" title="Saulo's email address">
							<img className={indexStyle.socialMediaLogo} src={email_logo} alt="contact@sauloefo.com"/>
							<span className="ml-2">contact@sauloefo.com</span>
						</a>
					</li>
					<li className="list-group-item">
						<a href="https://github.com/sauloefo" title="Saulo's GitHub profile" target="_blank" rel="noopener noreferrer">
							<img className={indexStyle.socialMediaLogo} src={github_logo} alt="https://github.com/sauloefo"/>
							<span className="ml-2">github.com/sauloefo</span>
						</a>
					</li>
					<li className="list-group-item">
						<a href="https://linkedin.com/in/sauloefo" title="Saulo's LinkedIn profile" target="_blank" rel="noopener noreferrer">
							<img className={indexStyle.socialMediaLogo} src={linkedin_logo} alt="https://linkedin.com/in/sauloefo"/>
							<span className="ml-2">linkedin.com/in/sauloefo</span>
						</a>
					</li>
					<li className="list-group-item">
						<a href="https://twitter.com/sauloefo" title="Saulo's twitter profile" target="_blank" rel="noopener noreferrer">
							<img className={indexStyle.socialMediaLogo} src={twitter_logo} alt="https://twitter.com/sauloefo"/>
							<span className="ml-2">twitter.com/sauloefo</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	)
}
