import React from "react";

let Intro = () => {
	return (
		<div
			className="d-flex justify-content-start align-items-center vh-100"
			style={{ backgroundColor: "#152238" }}
		>
			<div className="d-flex intro-text">
				<div id="left">
					<div>Hello! I'm Kevin McPeak</div>
					<div>Software Engineer</div>
					<div id="intro-description">
						<p>
							I am a self taught software engineer. Self Starter.
							Life Longer Learner
						</p>
					</div>
				</div>

				<div id="right">
					<div id="img_container">
						<div>**My Picture**</div>
					</div>
				</div>

				<div id="#right">Right</div>
			</div>
		</div>
	);
};

export default Intro;
