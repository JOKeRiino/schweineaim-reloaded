import React, { useRef, useEffect } from "react";
import "./Modal.css";
import VideoPlayer from "../Components/VideoPlayer";
import { UilMultiply } from "@iconscout/react-unicons";

function useOutsideAlerter(ref, setOpenModal) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpenModal(false);
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

function Modal({ setOpenModal, clip }) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setOpenModal);

	return (
		<div className="modalBackground">
			<div className="modalContainer" ref={wrapperRef}>
				<div className="titleCloseBtn" onClick={() => {
					setOpenModal(false);
				}}>
					<UilMultiply />
				</div>
				<div className="title">
					<h1>Clip:</h1>
					<a href={clip}>(Video-Backup)</a>
				</div>
				<div className="body">
					<VideoPlayer source={clip} />
				</div>
			</div>
		</div >
	);
}

export default Modal;