import React from "react";
import self from "../assets/kevin_portfolio_picture.png";

let Background = () => {
	return (
		<div id="background" className="container-sm section">
			<div className="row">
				<h5 className="col-3 ps-5">Background</h5>
				<div className="col 3">
					<div id="img_container">
						<img
							src={self}
							alt="self-photo"
							className="self-photo"
						></img>
					</div>
				</div>
				<div className="col-3">
					<p>
						I have been interested in cutting edge technology ever
						since I can remember. It took me until about 2 years ago
						to dive in, and I haven't looked back! I can honestly
						say computer programming is my life long passion. I love
						to build cool stuff and solve problems! "Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum."
					</p>
				</div>
			</div>
		</div>
	);
};

export default Background;
