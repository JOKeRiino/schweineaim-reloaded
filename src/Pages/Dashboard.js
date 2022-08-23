import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import '../Pages/Dashboard.css';
import Countdown from "../Components/Countdown";
import MapCard from "../Components/MapCard";
import { UilAward } from "@iconscout/react-unicons";
import { finishUrl, mapsUrl } from '../api.config';
import Loader from "../Components/Loader";

const Dashboard = () => {
	const [mapData, setMapData] = useState(undefined);
	const [finData, setFinData] = useState(undefined);

	useEffect(() => {
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
		axios.get(finishUrl)
			.then(res => {
				setFinData(res.data);
			});
	}, []);

	const renderMaps = () => {
		var doneMaps = []

		// mapData.forEach(map => {
		// 	if (finData.findIndex(object => {
		// 		return object.map === map.map_id;
		// 	}) !== -1) {
		// 		doneMaps.push(map);
		// 	}
		// })

		finData.forEach(map => {
			let mapIndex = mapData.findIndex(object => {
				return object.map_id === map.map;
			});
			if (mapIndex !== -1) {
				doneMaps.push(mapData[mapIndex]);
			}
		})

		return doneMaps.reverse().slice(0, 12).map((singleMap, index) => {
			return (
				<MapCard map={singleMap} key={index} />
			)
		})
	}

	return (
		<div className="pageContainer">
			<Countdown />
			{mapData && finData ?
				<div className="dashPage clear">
					<div className="titlelvl"><UilAward /> Recently Finished:</div>
					<div className="finish-grid">{renderMaps()}</div>
				</div> : <Loader />
			}
		</div>
	)
}

export default Dashboard;