import React from "react";
import SingleProject from "./SingleProject";
import fitnessImage from "../assets/Fitness_Planner-2.png";
import whereWaldoImage from "../assets/Where's_Waldo_1.png";
import shoppingCartImage from "../assets/Shopping_Cart-2.png";

let Projects = () => {
	let projectOne = {
		title: "Workout Generator",
		photo: fitnessImage,
		description: `Generate your weekly workout based on the amount of time you have a day and equipment you have access to.  This app fetches excercises from an API and is built with plain Javascript and Bootstrap.`,
	};

	let projectTwo = {
		title: "Where's Waldo",
		photo: whereWaldoImage,
		description: `A classic childhood game where the mission is to find Waldo and his friends! Challenge youself by competing in four unique levels.  If you are quick enough, you may land yourself on the leaderboard.  Built with React and Firebase.`,
	};

	let projectThree = {
		title: "Shopping Cart",
		photo: shoppingCartImage,
		description: `Browse Indoor and Outdoor furniture in this React based e-commerce website.  If you like a peice of furntiture, just click "Add to Cart". Finalize your order at Checkout by updating quantities.`,
	};

	return (
		<div id="projects" className="row d-flex justify-content-center mt-5">
			<h5 className="col-sm offset-md-2 title">Projects</h5>
			<div className="col-sm">
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
			<div className="col-sm"></div>
		</div>
	);
};

export default Projects;
