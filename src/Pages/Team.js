import React from "react";
import "../App.css";
import { TeamData } from "../Data/Data";
import Member from "../Components/Member";

const Team = () => {

	return (
		<div className="pageContainer">
			<div className="teamGrid">
				{
					TeamData.map((member, index) => {
						return <Member member={member} key={index} />
					})
				}
			</div>
		</div>
	)
}

export default Team;