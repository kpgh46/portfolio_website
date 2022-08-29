import React from "react";
import Button from "react-bootstrap/Button";

let SingleProject = (props) => {
	return (
		<div className="container-sm">
			<div className="row">
				<div className="col-4">
					<h2>{props.title}</h2>
					<div>{props.description}</div>
					<Button variant="primary">View Code</Button>
					<Button variant="primary">Live Demo</Button>
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
