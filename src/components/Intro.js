import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import triangle from "../assets/triagle_background.png";

let Intro = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 back">
			<div className="d-flex flex-column intro-text">
				<div id="intro-name">
					<div>HELLO, I'M KEVIN MCPEAK</div>
				</div>
				<div
					id="intro-paragraph"
					className="d-flex justify-content-center"
				>
					<div>
						Something Here
						<span style={{ marginLeft: "5px" }}>|</span>
					</div>
					<div style={{ marginLeft: "5px" }}>
						Something Else{" "}
						<span style={{ marginLeft: "5px" }}>|</span>
					</div>
					<div style={{ marginLeft: "5px" }}>Last thing Here</div>
				</div>
				<div id="intro-contact">
					<BsGithub />
					<BsLinkedin />
					<MdEmail />
				</div>
				<div id="intro-more">
					<BsFillArrowDownCircleFill />
				</div>
			</div>
		</div>
	);
};

export default Intro;
