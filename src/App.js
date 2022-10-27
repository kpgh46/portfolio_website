import "./App.css";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNpm } from "react-icons/io";
import { SiJest } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function App() {
	let skills = [
		[<SiJavascript />, "JavsScript"],
		[<AiFillHtml5 />, "HTML"],
		[<DiReact />, "React"],
		[<SiFirebase />, "Firebase"],
		[<SiCss3 />, "CSS"],
		[<AiFillApi />, " REST API"],
		[<SiVisualstudio />, "VS Code"],
		[<FaGitSquare />, "Git"],
		[<FaBootstrap />, "Bootstrap"],
		[<IoLogoNpm />, "NPM"],
		[<SiJest />, "Jest"],
		[<SiMongodb />, "MongoDB"],
		[<DiNodejs />, "NodeJS"],
		[<SiExpress />, "Express"],
		[<SiMysql />, "SQL"],
	];
	return (
		<div>
			<Navbar />
			<Intro />
			<div className="container-md">
				<Background />
				<Skills skills={skills} />
				<Projects />
			</div>
			<div>
				<Contact />
			</div>
		</div>
	);
}

export default App;
