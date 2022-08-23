import React from "react";
import ReactPlayer from "react-player";
import { TwitchClip } from "react-twitch-embed";
import { useCookieConsentContext } from '@use-cookie-consent/react';

import './VideoPlayer.css';
import modcheck from '../imgs/modcheck.gif'

const VideoPlayer = ({ source, width, height }) => {
	const { consent } = useCookieConsentContext();

	if (consent.thirdParty) {
		if (source) {
			if (width && height) {
				if (source.includes("youtube") || source.includes("streamable.")) {
					return (
						<ReactPlayer
							url={source}
							controls={true}
							light={true}
							width={width}
							height={height}
						/>
					)
				} else if (source.includes("https://clips.twitch.tv/")) {
					return <TwitchClip
						clip={source.replace("https://clips.twitch.tv/", "")}
						width={width}
						height={height}
						allowFullscreen={true}
						autoplay={false}
					/>
				} else {
					return (
						<div className="video-flex">
							<iframe
								title={"title"}
								src={source}
								controls={true}
								frameBorder="0"
								allowFullScreen
								width={width}
								height={height}
							/>
						</div>
					)
				}
			} else {
				if (source.includes("youtube") || source.includes("streamable.")) {
					return (
						<ReactPlayer
							url={source}
							controls={true}
							light={true}
						/>
					)
				} else if (source.includes("https://clips.twitch.tv/")) {
					return <TwitchClip
						clip={source.replace("https://clips.twitch.tv/", "")}
						allowFullscreen={true}
						autoplay={false}
					/>
				} else {
					return (
						<div className="video-flex">
							<iframe
								title={"title"}
								src={source}
								controls={true}
								frameBorder="0"
								allowFullScreen
							/>
						</div>
					)
				}
			}
		}
		return <div className="no-clip">
			<h3>Any Clippers?</h3>
			<img src={modcheck} alt="fish turning his head twitch emote" />
			<p>(Gibt kein Clip!)</p>
		</div>
	}
	return (<div className="no-clip">
		Please accept third-party cookies to view this content.
	</div>)
}

export default VideoPlayer;