import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { UilVideo } from "@iconscout/react-unicons";

import './MapFinCard.css';

const MapFinCard = ({ map, onPlayClip }) => {

	const getDif = (difficulty) => {
		switch (difficulty) {
			case 0:
				return "Unrated";
			case 1:
				return "Free";
			case 2:
				return "Geht";
			case 3:
				return "Hard";
			case 4:
				return "Imp";
			case 5:
				return "Bruh";
			default:
				return "";
		}
	}

	return (
		<div className="mapLink">
			<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className={"fin-box dif" + map.map_dif}>
				<div className={"box-glas dif" + map.map_dif}></div>
				<div className={"box-id"}>
					{map.map_id}
				</div>
				<Link className="box-content" to={"/maps/" + map.map_id}>
					Kacky Reloaded #{map.map_id}
				</Link>
				<div className={"maplvl dif" + map.map_dif}>
					LVL: {getDif(map.map_dif)}
				</div>
				{map.map_clip && <div className="clipLinkFlex" onClick={() => onPlayClip(map)}><UilVideo /><span>Play Clip!</span></div>}
			</Tilt >
		</div >
	)
}

export default MapFinCard;