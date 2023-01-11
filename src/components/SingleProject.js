import React from "react";
import Button from "react-bootstrap/Button";

let SingleProject = (props) => {
	return (
		<div className="row row-cols-auto">
			<div className="col-lg-6">
				<h2>{props.title}</h2>
				<div>{props.description}</div>
				<br></br>
				<Button
					href={props.codeUrl}
					style={{
						backgroundColor: "rgb(250,207,15)",
						borderColor: "rgb(250,207,15)",
						color: "black",
						marginRight: "8px",
						boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
					}}
					className="mb-3"
				>
					View Code
				</Button>
				{props.liveUrl && (
					<Button
						href={props.liveUrl}
						style={{
							backgroundColor: "rgb(250,207,15)",
							borderColor: "rgb(250,207,15)",
							color: "black",
							marginRight: "10px",
							boxShadow:
								"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
						}}
						variant="primary"
						className="mb-3"
					>
						Live Demo
					</Button>
				)}
			</div>
			<div className="col-lg-6">
				<img
					className="project-image"
					src={props.projectPhoto}
					alt="project photo"
				/>
			</div>
		</div>
	);
};

export default SingleProject;
