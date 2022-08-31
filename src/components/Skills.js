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
		<div className="row mt-5">
			<h5 className="col-lg-2 offset-2">Skills</h5>
			<div className="col-lg-6 d-flex flex-wrap">{allSkills}</div>
			{/* <div className="col"></div> */}
		</div>
	);
};

export default Skills;
