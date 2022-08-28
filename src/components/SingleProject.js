import React from "react";

let SingleProject = (props) => {
	return (
		<div className="container-sm">
			<div className="row">
				<div className="col-4">
					<h2>{props.title}</h2>
					<div>project descriptions</div>
				</div>
				<div className="col-8">
					<div className="project-image-container">
						<img
							className="testt"
							src={props.projectPhoto}
							alt="project photo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
