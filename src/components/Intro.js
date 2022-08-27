import React from "react";
import self from "../assets/kevin_portfolio_picture.png";

let Intro = () => {
	return (
		<div
			className="d-flex justify-content-start align-items-center vh-100"
			style={{ backgroundColor: "#152238" }}
		>
			<div className="d-flex intro-text">
				<div id="left">
					<div className="hover-animation">Hello! </div>
					<div className="hover-animation ps-3">
						{" "}
						I'm Kevin McPeak
					</div>
					<div>Software Engineer</div>
					<div id="intro-description">
						<p>I am a self taught software engineer.</p>
						<p>Life long learner</p>
						<p>Passionate about software Development</p>
					</div>
				</div>

				<div id="right">
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
