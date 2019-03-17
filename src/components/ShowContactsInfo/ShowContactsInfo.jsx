import React from "react"
import ShowContactInfo from "./ShowContactInfo"

export default ({ contactsInfo }) => {
	return (
		<ul className="list-group"> 
			{contactsInfo.map((contactInfo) => (
				<li className="list-group-item">
					<ShowContactInfo contactInfo={contactInfo}></ShowContactInfo>
				</li>
			))}
		</ul>
	)
}