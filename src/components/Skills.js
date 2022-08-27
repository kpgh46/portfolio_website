import React from "react";

let Skills = (props) => {
	// let el = <FontAwesomeIcon icon={BsGithub} />;
	let allSkills = props.skills.map((item) => {
		return (
			<div className="row">
				<div className="col-3">
					<div>{item[0]}</div>
					<div>{item[1]}</div>
				</div>
			</div>
		);
	});
	return (
		<div className="container-sm d-flex section ps-5 pe-5">
			<h5 className="pe-5">Skills</h5>
			<div>{allSkills}</div>
		</div>
	);
};

export default Skills;
