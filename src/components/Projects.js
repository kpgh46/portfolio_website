import React from "react";
import SingleProject from "./SingleProject";
import fitnessImage from "../assets/Fitness_Planner-2.png";
import whereWaldoImage from "../assets/Where's_Waldo_1.png";
import shoppingCartImage from "../assets/Shopping_Cart-2.png";
import MovieImage from "../assets/movie_database3.png";
import SocialApp from "../assets/shareThoughtsScreenshot.png";
import Tetris from "../assets/tetrisTwo.png";

let Projects = () => {
	let projectOne = {
		title: "Workout Generator",
		primary: "API, Algorithm",
		photo: fitnessImage,
		description: `Generate your weekly workout based on the number of days, amount of time, and equipment you have access to. View GIF's of excercises and track your weekly progress.  This app fetches exercises from two API's and is built with plain Javascript and Bootstrap 5.`,
		liveUrl: "https://kpgh46.github.io/fitness-dashboard/",
		codeUrl: "https://github.com/kpgh46/fitness-dashboard",
	};

	let projectTwo = {
		title: "Photo Tagging Game",
		primary: "React, Firebase",
		photo: whereWaldoImage,
		description: `A classic childhood game where the mission is to find Waldo and his friends! Challenge yourself by competing in four unique levels.  If you are quick enough, you may land yourself on the global leaderboard.  Built with React and Firebase.`,
		liveUrl: "https://kpgh46.github.io/wheresWaldo/",
		codeUrl: "https://github.com/kpgh46/wheresWaldo",
	};

	let projectThree = {
		title: "E-Commerce Shopping Website",
		primary: "React",
		photo: shoppingCartImage,
		description: `A replica of an E-Commerce website where you can browse Indoor and Outdoor furniture.  If you like a peice of furniture, just click "Add to Cart". Finalize your order at checkout by updating quantities. Built with React.`,
		liveUrl: "https://kpgh46.github.io/shoppingcart/",
		codeUrl: "https://github.com/kpgh46/shoppingcart",
	};

	let projectFour = {
		title: "Movie Database",
		primary: "Full Stack, CRUD",
		photo: MovieImage,
		description: `Create, Read, Update, and Delete your favorite
		movies with this database. Search based on
		your preferred category and learn more about
		any type of movie. Built with NodeJS, MongoDB,
		Express, and Pug.`,
		liveUrl: "https://movieapp-production.up.railway.app/",
		codeUrl: "https://github.com/kpgh46/MovieApp",
	};

	let projectFive = {
		title: "Social Media App",
		primary: "Full Stack, CRUD, Authentication",
		photo: SocialApp,
		description: `A Social Media app that allows users to post, comment, like and follow other users.  Implemented with a Restful API with CRUD functionality utilizing MERN stack with JSON Web Token Authentication.`,
		// liveUrl: "https://movieapp-production.up.railway.app/",
		codeUrl: "https://github.com/kpgh46/twttrClone",
	};

	let projectSix = {
		title: "Tetris",
		primary: "Test Driven Development",
		photo: Tetris,
		description: `This classic puzzle game was built using Test Driven Development, JavaScript, and CSS with a focus on pure functions and easy to follow code.  Complete with five levels of increasing speed and a points tracking system.`,
		liveUrl: "https://kpgh46.github.io/TDD_Tetris/",
		codeUrl: "https://github.com/kpgh46/TDD_Tetris",
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
						primary={projectOne.primary}
						projectPhoto={projectOne.photo}
						description={projectOne.description}
						liveUrl={projectOne.liveUrl}
						codeUrl={projectOne.codeUrl}
					/>
					<SingleProject
						title={projectFive.title}
						primary={projectFive.primary}
						projectPhoto={projectFive.photo}
						description={projectFive.description}
						// liveUrl={projectFive.liveUrl}
						codeUrl={projectFive.codeUrl}
					/>
					<SingleProject
						title={projectSix.title}
						primary={projectSix.primary}
						projectPhoto={projectSix.photo}
						description={projectSix.description}
						liveUrl={projectSix.liveUrl}
						codeUrl={projectSix.codeUrl}
					/>
					<SingleProject
						title={projectTwo.title}
						primary={projectTwo.primary}
						projectPhoto={projectTwo.photo}
						description={projectTwo.description}
						liveUrl={projectTwo.liveUrl}
						codeUrl={projectTwo.codeUrl}
					/>
					<SingleProject
						title={projectFour.title}
						primary={projectFour.primary}
						projectPhoto={projectFour.photo}
						description={projectFour.description}
						liveUrl={projectFour.liveUrl}
						codeUrl={projectFour.codeUrl}
					/>
					<SingleProject
						title={projectThree.title}
						primary={projectThree.primary}
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
