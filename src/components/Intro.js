import React from "react";
import self from "../assets/kevin_portfolio_picture.png";
import triangle from "../assets/triagle_background.png";

let Intro = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 back">
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
					<div className="d-flex intro-description">
						<p className="hover-animation ps-2 intro-words">
							Self taught software engineer
						</p>
						<span>|</span>
						<p className="hover-animation ps-2 intro-words">
							Life long learner
						</p>
						<span>|</span>
						<p className="hover-animation ps-2 intro-words">
							Passionate about Software Development
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
