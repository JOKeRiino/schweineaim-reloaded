import React from "react";
import { Link } from "react-router-dom";
import { UilCarSlash } from "@iconscout/react-unicons";

import './NotYetFinished.css';

const NotYetFinished = ({ playerFins, maps }) => {

	const allMaps = maps;
	playerFins.forEach((m) => {
		if (allMaps.find((e) => {
			return e.map === m.map_id
		})) {
			var x = allMaps.findIndex(e => e.map_id === m.map);
			allMaps.splice(x, 1);
		}
	});
	let sortedMaps = allMaps.sort((a, b) => a.map_dif - b.map_dif);

	const renderMaps = () => {
		return sortedMaps.map((m, index) => {
			return <Link to={"/maps/" + m.map_id} className={"dif" + m.map_dif} key={index}>{m.map_id}</Link>
		})
	}

	return (
		<div className="notfin-table-div">
			<span className="titlelvl"><UilCarSlash /> Maps not yet finished</span>
			<div className="map-flex">
				{renderMaps()}
			</div>
		</div>
	)
}

export default NotYetFinished;