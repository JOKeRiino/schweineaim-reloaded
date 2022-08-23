import React from "react";
import "./Member.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Member = ({ member }) => {
	return (
		<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="member-container">
			<div className="member-flex">
				<div className="member-content">
					<img src={member.img} alt={member.name + "profile picture"} />
					<h2>
						<Link to={"/team/" + member.name}>View Finishes</Link>
					</h2>
				</div>
				<div className="memberName">
					<h2><Link to={"/team/" + member.name}>{member.name}</Link></h2>
				</div>
			</div>
			<div className="memberLinks">
				<table>
					<tbody>
						{member.twitch !== "" ?
							<tr><td>Twitch: </td><td><a href={member.twitch} target="_blank" rel="noopener noreferrer">{member.twitch}</a></td></tr> : ""
						}
						{member.twitter !== "" ?
							<tr><td>Twitter: </td><td><a href={member.twitter} target="_blank" rel="noopener noreferrer">{member.twitter}</a></td></tr> : ""
						}
					</tbody>
				</table>
			</div>
		</Tilt>
	)
}

export default Member;