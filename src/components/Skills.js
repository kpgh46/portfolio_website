import React from "react";

let Skills = (props) => {
	// let el = <FontAwesomeIcon icon={BsGithub} />;
	let allSkills = props.skills.map((item) => {
		return <div>{item}</div>;
	});
	return (
		<div className="container-sm d-flex section ps-5 pe-5">
			<h5 className="d-flex pe-5">Skills</h5>
			<div className="d-flex">{allSkills}</div>
		</div>
	);
};

export default Skills;
