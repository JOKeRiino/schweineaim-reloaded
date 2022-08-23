import React, { useState, useEffect, useRef } from "react";
import './Countdown.css';
import Tilt from "react-parallax-tilt";

const Countdown = () => {
	const [timerDay, setTimerDay] = useState();
	const [timerHour, setTimerHour] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();
	const dd = useRef(undefined);
	const hh = useRef(null);
	const mm = useRef(null);
	const ss = useRef(null);

	const countDownDate = new Date("Sept 18,2022 ").getTime();

	useEffect(() => {
		//startTimer();
		const interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;

			const days = Math.floor(distance / (24 * 60 * 60 * 1000));
			const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			dd.current.style.strokeDashoffset = 152 - (152 * days) / 31;
			hh.current.style.strokeDashoffset = 152 - (152 * hours) / 24;
			mm.current.style.strokeDashoffset = 152 - (152 * minutes) / 60;
			ss.current.style.strokeDashoffset = 152 - (152 * seconds) / 60;

			if (distance < 0) {
				//Stop timer
				clearInterval(interval.current);
			} else {
				//Update timer
				setTimerDay(days);
				setTimerHour(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [countDownDate])

	return (
		<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="countdown-comp">
			<span className="team-title">Kacky Time Remaining:</span>
			<div id="time">
				<div className="circle" style={{ "--clr": "#FF919D" }}>
					<svg>
						<circle cx="25" cy="25" r="25"></circle>
						<circle cx="25" cy="25" r="25" ref={dd}></circle>
					</svg>
					<div id="days">
						{timerDay}
						<br />
						<span>Days</span>
					</div>
				</div>
				<div className="circle" style={{ "--clr": "#FF919D" }}>
					<svg>
						<circle cx="25" cy="25" r="25"></circle>
						<circle cx="25" cy="25" r="25" ref={hh}></circle>
					</svg>
					<div id="hours">
						{timerHour}
						<br />
						<span>Hours</span>
					</div>
				</div>
				<div className="circle" style={{ "--clr": "#FF919D" }}>
					<svg>
						<circle cx="25" cy="25" r="25"></circle>
						<circle cx="25" cy="25" r="25" ref={mm}></circle>
					</svg>
					<div id="minutes">
						{timerMinutes}
						<br />
						<span>Minutes</span>
					</div>
				</div>
				<div className="circle" style={{ "--clr": "#FF919D" }}>
					<svg>
						<circle cx="25" cy="25" r="25"></circle>
						<circle cx="25" cy="25" r="25" ref={ss}></circle>
					</svg>
					<div id="seconds">
						{timerSeconds}
						<br />
						<span>Seconds</span>
					</div>
				</div>
			</div>
		</Tilt>
	);
}

export default Countdown;