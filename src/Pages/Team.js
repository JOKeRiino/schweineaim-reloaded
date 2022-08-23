import React from "react";
import "../App.css";
import { TeamData } from "../Data/Data";
import Member from "../Components/Member";
import riinoPic from "../imgs/riino.webp";


const riino = {
	img: riinoPic,
	name: "Riino (Developer)",
	twitch: "",
	twitter: "https://twitter.com/riino_dev",
}

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
			<hr></hr>
			<Member member={riino} />
		</div>
	)
}

export default Team;