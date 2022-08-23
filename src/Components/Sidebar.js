import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion/dist/framer-motion";
import { NavLink, Link } from "react-router-dom";

import { SidebarData } from "../Data/Data";

import "./Sidebar.css";
import Logo from "../imgs/logo.webp";

const Sidebar = () => {
	const [expanded, setExpaned] = useState(true)

	const sidebarVariants = {
		true: {
			left: '0'
		},
		false: {
			left: '-60%'
		}
	}
	//console.log(window.innerWidth)
	return (
		<>
			<div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
				<UilBars />
			</div>
			<motion.div className='sidebar'
				variants={sidebarVariants}
				animate={window.innerWidth <= 768 ? `${expanded}` : ''}
			>
				{/* logo */}
				<Link to="" className="logo">
					<img src={Logo} alt="logo" />
				</Link>

				<div className="menu">
					{SidebarData.map((item, index) => {
						return (
							<NavLink
								to={item.link}
								className={"menuItem"}
								key={index}
							>
								<item.icon />
								<span>{item.heading}</span>
							</NavLink>
						);
					})}
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;