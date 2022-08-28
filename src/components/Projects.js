import React from "react";
import SingleProject from "./SingleProject";

let Projects = () => {
	return (
		<div className="container-sm section">
			<div className="row">
				<h5 className="col-3 ps-5">Projects</h5>
				<div className="col-7">
					<SingleProject title={"workout generator"} />
				</div>
			</div>
		</div>
	);
};

export default Projects;
