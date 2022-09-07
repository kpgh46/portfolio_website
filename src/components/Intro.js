import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import triangle from "../assets/triagle_background.png";

let Intro = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vw-100 vh-100 back">
			<div className="d-flex flex-column intro-text">
				<div id="intro-name" className="text-center">
					<div>HELLO, I'M KEVIN MCPEAK</div>
				</div>
				<div
					id="intro-paragraph"
					className="d-flex justify-content-center"
				>
					<div>
						Software Engineer from Pittsburgh Pennsylvania
						{/* <span style={{ marginLeft: "5px" }}>|</span> */}
					</div>
					{/* <div style={{ marginLeft: "5px" }}>
						Something Else{" "}
						<span style={{ marginLeft: "5px" }}>|</span>
					</div>
					<div style={{ marginLeft: "5px" }}>Last thing Here</div> */}
				</div>
				<div id="intro-contact">
					<a
						href="https://github.com/kpgh46"
						target="_blank"
						rel="noreferrer"
						style={{ margin: "1px" }}
					>
						<BsGithub />
					</a>

					<a
						href="https://www.linkedin.com/in/kevin-mcpeak-a9457931"
						target="_blank"
						rel="noreferrer"
						style={{ margin: "1px" }}
					>
						<BsLinkedin />
					</a>
					<a href="#contact" style={{ margin: "1px" }}>
						<MdEmail />
					</a>
				</div>
				<div id="intro-more">
					<a href="#background">
						<BsFillArrowDownCircleFill />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
