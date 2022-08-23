import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import './MapCard.css';

const MapCard = ({ map, index }) => {

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
		<Link className="mapLink" to={"/maps/" + map.map_id}>
			<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className={"map-box dif" + map.map_dif} key={index}>
				<div className={"box-glas dif" + map.map_dif}></div>
				<div className={"box-id"}>
					{map.map_id}
				</div>
				<div className="box-content">
					Kacky Remixed #{map.map_id}
				</div>
				<div className={"maplvl dif" + map.map_dif}>
					LVL: {getDif(map.map_dif)}
				</div>
			</Tilt >
		</Link>
	)
}

export default MapCard;

