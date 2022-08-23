import React, { useState, useEffect } from "react";
import axios from "axios";
import MapCard from "../Components/MapCard";
import Loader from "../Components/Loader";

import '../App.css';
import { mapsUrl } from '../api.config';

const Maps = () => {
	const [mapData, setMapData] = useState(null);

	useEffect(() => {
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			})
	}, []);

	const renderMaps = () => {
		return mapData.map((singleMap, index) => {
			return (
				<MapCard map={singleMap} key={index} />
			)
		})
	}

	if (mapData) {
		return (
			<div className="pageContainer">
				<div className="mapGrid">
					{renderMaps()}
				</div>
			</div>
		)
	}
	return (
		<Loader />
	)
}

export default Maps;