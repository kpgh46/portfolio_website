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
		liveUrl: "https://kpgh46.github.io/fitness-dashboard/",
		codeUrl: "https://github.com/kpgh46/fitness-dashboard",
	};

	let projectTwo = {
		title: "Where's Waldo",
		photo: whereWaldoImage,
		description: `A classic childhood game where the mission is to find Waldo and his friends! Challenge youself by competing in four unique levels.  If you are quick enough, you may land yourself on the leaderboard.  Built with React and Firebase.`,
		liveUrl: "https://kpgh46.github.io/wheresWaldo/",
		codeUrl: "https://github.com/kpgh46/wheresWaldo",
	};

	let projectThree = {
		title: "Shopping Cart",
		photo: shoppingCartImage,
		description: `Browse Indoor and Outdoor furniture in this React based e-commerce website.  If you like a peice of furntiture, just click "Add to Cart". Finalize your order at Checkout by updating quantities.`,
		liveUrl: "https://kpgh46.github.io/shoppingcart/",
		codeUrl: "https://github.com/kpgh46/shoppingcart",
	};

	return (
		<div id="projects">
			<br></br>
			<div id="projects" className="row mt-5">
				<div className="col-lg-2"></div>
				<h5 className="col-lg-2 title">Projects</h5>
				<div className="col-lg-6">
					<SingleProject
						title={projectOne.title}
						projectPhoto={projectOne.photo}
						description={projectOne.description}
						liveUrl={projectOne.liveUrl}
						codeUrl={projectOne.codeUrl}
					/>
					<SingleProject
						title={projectTwo.title}
						projectPhoto={projectTwo.photo}
						description={projectTwo.description}
						liveUrl={projectTwo.liveUrl}
						codeUrl={projectTwo.codeUrl}
					/>
					<SingleProject
						title={projectThree.title}
						projectPhoto={projectThree.photo}
						description={projectThree.description}
						liveUrl={projectThree.liveUrl}
						codeUrl={projectThree.codeUrl}
					/>
				</div>
				{/* <div className="col-sm"></div> */}
			</div>
		</div>
	);
};

export default Projects;
