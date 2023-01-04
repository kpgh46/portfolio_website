import React from "react";
import self from "../assets/kevin_headshot9.png";

let Background = () => {
	return (
		<div id="background">
			<br></br>
			<div className="row mt-5 ">
				<div className="col-lg-2"></div>

				<h5 className="col-lg-2 title">Journey</h5>
				<div className="col-lg-3 d-flex justify-content-center">
					<div id="img_container ">
						<img
							src={self}
							alt="self-photo"
							className="self-photo"
						></img>
					</div>
				</div>
				<div className="col-lg-3">
					<p>
						I’ve always been interested in technology and, in early
						2021, I decided I wanted to make it a significant part
						of my life. I dove right into HTML, CSS, and Javascript.
						As a life long learner, ‘leveling up’ my skills day in
						and day out was a great feeling. This was the first time
						I found myself doing something I loved.
					</p>
					<p>
						{" "}
						I've earned a bachelors degree, MBA, and followed The
						Odin Project cirriculum for web development. Learning
						software development is one of the most challenging
						things I have done in my life, but the challenge is what
						keeps me excited for the future.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Background;
