import React from "react";

let Skills = (props) => {
	// let el = <FontAwesomeIcon icon={BsGithub} />;
	let allSkills = props.skills.map((item) => {
		return (
			<div>
				<div className="m-3 d-flex flex-column">
					<div>{item[0]}</div>
					<div className="text-center">{item[1]}</div>
				</div>
			</div>
		);
	});
	return (
		<div className="row d-flex justify-content-center mt-5">
			<h5 className="col-sm offset-md-2 title">Skills</h5>
			<div className="col-5 d-flex flex-wrap">{allSkills}</div>
			<div className="col-sm"></div>
		</div>
	);
};

export default Skills;
