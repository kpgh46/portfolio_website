import React from "react";

let SingleProject = (props) => {
	return (
		<div className="container-sm section">
			<div className="row">
				<div className="col-4">
					<h2>{props.title}</h2>
					<div>project descriptions</div>
				</div>
				<div className="col-8 d-flex justify-content-center">
					<img
						className="project-image"
						src={props.projectPhoto}
						alt="project photo"
					/>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
