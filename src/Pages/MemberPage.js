import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UilArrowLeft, UilUserCircle, UilMap, UilAward } from "@iconscout/react-unicons";

import { playerUrl, mapsUrl } from "../api.config";
import Loader from "../Components/Loader";
import MapFinCard from "../Components/MapFinCard";
import Modal from "../Components/Modal";
import NotYetFinished from "../Components/NotYetFinished";
import "../App.css";
import "./MemberPage.css";

const MemberPage = () => {
	const [playerData, setPlayerData] = useState(undefined);
	const [mapData, setMapData] = useState(undefined);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalClip, setModalClip] = useState(undefined);
	const { name } = useParams();

	useEffect(() => {
		axios.get(playerUrl + name.toLowerCase())
			.then(res => {
				setPlayerData(res.data);
			});
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
	}, [name]);

	const getMedal = () => {
		if (playerData.length >= 10 && playerData.length < 25)
			return <div className="txt plastic"><UilAward /> Current medal: Plastic</div>
		else if (playerData.length >= 25 && playerData.length < 50)
			return <div className="txt bronze"><UilAward /> Current medal: Bronze</div>
		else if (playerData.length >= 50 && playerData.length < 66)
			return <div className="txt silver"><UilAward /> Current medal: Silver</div>
		else if (playerData.length >= 66 && playerData.length < 75)
			return <div className="txt gold"><UilAward /> Current medal: Gold</div>
		else if (playerData.length >= 75)
			return <div className="txt kacky"><UilAward /> Current medal: Kacky</div>
		else return <div className="txt nomedal"><UilAward /> Current medal: No medal yet</div>
	}
	const renderFins = () => {
		return playerData.map((finish, index) => {
			const currMap = mapData.find(x => x.map_id === finish.map);
			return (
				<MapFinCard map={currMap} clip={finish.clip} key={index} onPlayClip={onPlayClip}></MapFinCard>
			)
		})
	}

	const onPlayClip = (map) => {
		let modalClip = playerData.find(x => x.map === map.map_id).clip;
		console.log(modalClip);
		setModalClip(modalClip);
		setModalOpen(true);
	}

	if (name && name.toLowerCase().includes("riino")) {
		return (
			<div className="pageContainer">
				<div className="memberPage">
					<Link to="/team"><UilArrowLeft />Back to Team</Link>
					<div className="title txt"><UilUserCircle />{name}</div>
					<div className="txt">(Ich putze hier nur!)</div>
				</div>
			</div>
		)
	}
	if (playerData && mapData) {
		return (
			<div className="pageContainer">
				<div className="memberPage">
					<Link to="/team"><UilArrowLeft />Back to Team</Link>
					<div className="title txt"><UilUserCircle />{name}</div>
					<div className="txt"><UilMap />Maps finished: {playerData.length}/75</div>
					{getMedal()}
				</div>
				<div className="memberPage clear">
					<div className="titlelvl"><UilAward /> Finished by {name}:</div>
					{playerData.length > 0 ? <div className="finish-grid">{renderFins()}</div> : "No finishes to display."}
				</div>
				{/* <div className="memberPage">
					<NotYetFinished playerFins={playerData} maps={mapData} />
				</div> */}
				{modalOpen && <Modal setOpenModal={setModalOpen} clip={modalClip} />}
			</div>
		)
	}
	return (
		<Loader />
	)
}

export default MemberPage