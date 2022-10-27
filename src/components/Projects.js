import React from "react";
import SingleProject from "./SingleProject";
import fitnessImage from "../assets/Fitness_Planner-2.png";
import whereWaldoImage from "../assets/Where's_Waldo_1.png";
import shoppingCartImage from "../assets/Shopping_Cart-2.png";
import MovieImage from "../assets/movie_database3.png";

let Projects = () => {
	let projectOne = {
		title: "Workout Generator",
		photo: fitnessImage,
		description: `Generate your weekly workout based on the number of days, amount of time, and equipment you have access to. View GIF's of excercises and track your weekly progress.  This app fetches exercises from two API's and is built with plain Javascript and Bootstrap 5.`,
		liveUrl: "https://kpgh46.github.io/fitness-dashboard/",
		codeUrl: "https://github.com/kpgh46/fitness-dashboard",
	};

	let projectTwo = {
		title: "Where's Waldo",
		photo: whereWaldoImage,
		description: `A classic childhood game where the mission is to find Waldo and his friends! Challenge yourself by competing in four unique levels.  If you are quick enough, you may land yourself on the global leaderboard.  Built with React and Firebase.`,
		liveUrl: "https://kpgh46.github.io/wheresWaldo/",
		codeUrl: "https://github.com/kpgh46/wheresWaldo",
	};

	let projectThree = {
		title: "E-Commerce Shopping Website",
		photo: shoppingCartImage,
		description: `A replica of an E-Commerce website where you can browse Indoor and Outdoor furniture.  If you like a peice of furniture, just click "Add to Cart". Finalize your order at checkout by updating quantities. Built with React.`,
		liveUrl: "https://kpgh46.github.io/shoppingcart/",
		codeUrl: "https://github.com/kpgh46/shoppingcart",
	};

	let projectFour = {
		title: "Movie Database",
		photo: MovieImage,
		description: `Create, Read, Update, and Delete your favorite
		movies with this database. Search based on
		your favorite category and learn more about
		any type of movie. Built with NodeJS, MongoDB,
		Express, and Pug.`,
		liveUrl: "https://movieapp-production.up.railway.app/",
		codeUrl: "https://github.com/kpgh46/MovieApp",
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
						title={projectFour.title}
						projectPhoto={projectFour.photo}
						description={projectFour.description}
						liveUrl={projectFour.liveUrl}
						codeUrl={projectFour.codeUrl}
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
