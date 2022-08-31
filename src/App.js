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

function App() {
	let skills = [
		[<SiJavascript />, "JavsScript"],
		[<AiFillHtml5 />, "HTML"],
		[<DiReact />, "React"],
		[<SiFirebase />, "Firebase"],
		[<SiCss3 />, "CSS"],
		[<AiFillApi />, "API's"],
		[<FaGithub />, "github"],
		// [<SiVisualstudio />, "VS Code"],
		[<FaGitSquare />, "Git"],
		[<FaBootstrap />, "Bootstrap"],
		[<IoLogoNpm />, "NPM"],
	];
	return (
		<div>
			<Intro />
			<Navbar />
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
