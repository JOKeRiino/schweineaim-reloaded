import React from "react";
import { UilVideo } from "@iconscout/react-unicons";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import trilluxePic from '../imgs/trilluxe.webp';
import roederPic from '../imgs/röder.webp';
import marfPic from '../imgs/marf.webp';
import bladerPic from '../imgs/blader.webp';
import fibuPic from '../imgs/fibu.webp';
import nallikPic from '../imgs/nallik.webp';
import smithPic from '../imgs/smith.webp';

import './FinCard.css';

const FinCard = ({ fin, setCurrClip }) => {

	const getImage = (player) => {
		switch (player) {
			case 'Röder':
				return roederPic;
			case 'TrilluXe':
				return trilluxePic;
			case 'Marf':
				return marfPic;
			case 'Blader':
				return bladerPic;
			case 'Fibu':
				return fibuPic;
			case 'Nallik':
				return nallikPic;
			case 'Smith':
				return smithPic;
			default:
				return trilluxePic;
		}
	}

	return (
		<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} className="card-container">
			<div className="nameAndPic">
				<Link to={"/team/" + fin.player}>
					<img src={getImage(fin.player)} alt={fin.player + "profile pic"} />
				</Link>
				<Link to={"/team/" + fin.player}>{fin.player}</Link>
			</div>
			{fin.clip ?
				<div className="clipLinkFlex" onClick={() => setCurrClip(fin.clip)}><UilVideo /><span>Play Clip!</span></div> : ""
			}
		</Tilt>
	)
}

export default FinCard;