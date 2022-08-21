import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
	return (
		<div className="main-footer">
			<div className="footer-container">
				<div className="footer-row-flex">
					<p className="col">
						Made with <span role="img" aria-label="pig and heart emoji">🐷💜</span> by <a
							href="https://twitter.com/riino_dev"
							target="_blank"
							rel="noopener noreferrer"
						>Riino</a>
					</p>
				</div>
				<p className="footer-text-flex">
					Diese Webseite dient keinem kommerziellen Zweck, sondern dient ausschließlich zur Unterhaltung und zu privaten Zwecken. Jegliche Inhalte gehören den rechtmäßgen Rechteinhabern.
					<Link to="/cookie-policy">Datenschutzerklärung</Link>
				</p>
				<div className="footer-row-flex">
					<p className="col">
						&copy;{new Date().getFullYear()} Riino. All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;