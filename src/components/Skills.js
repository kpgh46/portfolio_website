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
		<div className="container-sm section">
			<div className="row">
				<h5 className="col-3 ps-5">Skills</h5>
				<div className="col-7 d-flex flex-wrap justify-content-center">
					{allSkills}
				</div>
			</div>
		</div>
	);
};

export default Skills;
