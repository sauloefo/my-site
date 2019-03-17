import React from "react"
import email_logo from "../images/email-logo.png"
import github_logo from "../images/github-logo.png"
import linkedin_logo from "../images/linkedin-logo.png"
import twitter_logo from "../images/twitter-logo.png"

const contactInfoLogo = {
	"email": email_logo,
	"github": github_logo,
	"linkedin": linkedin_logo,
	"twitter": twitter_logo 
}

export default ({ contactInfo }) => {
	const { type, emailAddress, href, description, openInNewTab, imageCssClass, label } = contactInfo;
	const aProps = (type === "email")
		? {
			href: `mailto:${emailAddress}`,
		}
		: {
			href,
			target: openInNewTab && "_blank",
			rel: openInNewTab && "noopener"
		}
	return <a title={description} {...aProps}>
		<img className={imageCssClass} src={contactInfoLogo[type]} alt={href}/>
		<span className="ml-2">{label}</span>
	</a>
}