import React from "react";
import SingleProject from "./SingleProject";
import fitnessImage from "../assets/Fitness_Planner-2.png";
import whereWaldoImage from "../assets/Where's_Waldo_1.png";
import shoppingCartImage from "../assets/Shopping_Cart-2.png";

let Projects = () => {
	let projectOne = {
		title: "Workout Generator",
		photo: fitnessImage,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore
		magna aliqua. Ut enim ad minim veniam, quis nostrud
		exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in
		reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur.`,
	};

	let projectTwo = {
		title: "Where's Waldo",
		photo: whereWaldoImage,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore
		magna aliqua. Ut enim ad minim veniam, quis nostrud
		exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in
		reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur.`,
	};

	let projectThree = {
		title: "Shopping Cart",
		photo: shoppingCartImage,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore
		magna aliqua. Ut enim ad minim veniam, quis nostrud
		exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in
		reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur.`,
	};

	return (
		<div id="projects" className="container-sm section">
			<div className="row">
				<h5 className="col-3 ps-5">Projects</h5>
				<div className="col-8">
					<SingleProject
						title={projectOne.title}
						projectPhoto={projectOne.photo}
						description={projectOne.description}
					/>
					<SingleProject
						title={projectTwo.title}
						projectPhoto={projectTwo.photo}
						description={projectTwo.description}
					/>
					<SingleProject
						title={projectThree.title}
						projectPhoto={projectThree.photo}
						description={projectThree.description}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
