import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { UilArrowLeft, UilAward, UilMap } from "@iconscout/react-unicons";
import '../App.css';
import './MapPage.css';

import { finishUrl, mapsUrl } from '../api.config';
import Loader from '../Components/Loader';
import VideoPlayer from "../Components/VideoPlayer";
import FinCard from "../Components/FinCard";

const Map = () => {
	const [finData, setFinData] = useState(undefined);
	const [mapData, setMapData] = useState(undefined);
	const [currMap, setCurrMap] = useState(undefined);
	const [currFins, setCurrFins] = useState([]);
	const [currClip, setCurrClip] = useState(undefined);

	const { id } = useParams();

	useEffect(() => {
		axios.get(finishUrl)
			.then(res => {
				setFinData(res.data);
			});
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
	}, []);

	useEffect(() => {
		if (mapData) {
			mapData.forEach(map => {
				if (map.map_id.toString() === id) {
					setCurrMap(map);
					setCurrClip(map.map_clip);
				}
			});
		}
	}, [mapData, id]);

	useEffect(() => {
		if (finData) {
			finData.forEach(fin => {
				if (fin.map.toString() === id) {
					if (!currFins.some(e => e.player === fin.player)) {
						setCurrFins(currFins => [...currFins, fin]);
					}
				}
			});
		}
	})

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
				return "Impossible";
			case 5:
				return "Bruh";
			default:
				return "";
		}
	}

	const renderFinishes = () => {
		return currFins.map((fin, index) => {
			return <FinCard fin={fin} key={"fin" + index} setCurrClip={setCurrClip} />
		})
	}

	if (currMap) {
		return (
			<div className="pageContainer">
				<div className="mapPage">
					<Link to="/maps"><UilArrowLeft /> Back to Maps</Link>
					<div className="title"><UilMap /> Kacky Reloaded #{currMap.map_id}</div>
					<div className="titlelvl">
						Difficulty: <span className={"titlelvl dif" + currMap.map_dif}>{getDif(currMap.map_dif)}</span>
					</div>
				</div>
				<div className="mapPage">
					<div className="video-container">
						<div className="video-flex">
							<VideoPlayer source={currClip} />
						</div>
						{currClip ? <p>
							<a
								href={currClip}
								target="_blank"
								rel="noopener noreferrer"
							>Wenn das Video nicht spielt, klicke hier!
							</a>
						</p> : ''}
					</div>
				</div>
				<div className="mapPage clear">
					<div className="titlelvl"><UilAward /> Finished by:</div>
					{currFins.length > 0 ? <div className="finish-grid">{renderFinishes()}</div> : currMap.map_dif === 1 ? <div className="Ich dachte die ist free?!"></div> : ""}
				</div>
			</div >
		)
	}
	return (
		< Loader />
	)
}

export default Map