import React from "react";
import self from "../assets/kevin_portfolio_picture.png";

let Intro = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center vh-100"
			style={{ backgroundColor: "#152238" }}
		>
			<div className="d-flex intro-text">
				<div id="left">
					<div className="hover-animation">Hello! </div>
					<div className="hover-animation ps-2">
						{" "}
						I'm Kevin McPeak
					</div>
					<br></br>
					<div className="hover-animation pb-2">
						Software Engineer
					</div>
					<div id="intro-description" className="d-flex">
						<p className="hover-animation ps-2">
							Self taught software engineer |{" "}
						</p>
						<p className="hover-animation ps-2">
							Life long learner|{" "}
						</p>
						<p className="hover-animation ps-2">
							Passionate about software Development
						</p>
					</div>
				</div>

				<div className="ps-5" id="right">
					<div id="img_container">
						<img
							src={self}
							alt="self-photo"
							className="self-photo"
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
