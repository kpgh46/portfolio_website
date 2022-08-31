import React from "react";
import self from "../assets/kevin_portfolio_picture.png";

let Background = () => {
	return (
		<div id="background" className="row d-flex justify-content-center mt-5">
			<h5 className="col-sm offset-md-2 title">Background</h5>
			<div className="col-sm">
				<div id="img_container">
					<img
						src={self}
						alt="self-photo"
						className="self-photo"
					></img>
				</div>
			</div>
			<div className="col-sm">
				<p>
					I have been interested in cutting edge technology ever since
					I can remember. It took me until about 2 years ago to dive
					in, and I haven't looked back! I can honestly say computer
					programming is my life long passion. I love to build cool
					stuff and solve problems! "Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat. Duis aute irure dolor"
				</p>
			</div>
			<div className="col-sm"></div>
		</div>
	);
};

export default Background;
