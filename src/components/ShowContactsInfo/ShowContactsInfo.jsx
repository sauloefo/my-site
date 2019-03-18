import React from "react"
import ShowContactInfo from "./ShowContactInfo"

export default ({ contactsInfo }) => {
	return (
		<ul className="list-group"> 
			{contactsInfo.map((contactInfo) => {
				const key = contactInfo.type + contactInfo.label
				return (<li key={key} className="list-group-item">
					<ShowContactInfo contactInfo={contactInfo}></ShowContactInfo>
				</li>)
			})}
		</ul>
	)
}