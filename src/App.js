import "./App.css";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
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
		<FaGithub />,
		<SiJavascript />,
		<SiCss3 />,
		<SiVisualstudio />,
		<SiFirebase />,
		<DiReact />,
		<FaGitSquare />,
		<AiFillApi />,
		<AiFillHtml5 />,
		<FaBootstrap />,
		<IoLogoNpm />,
	];
	return (
		<div className="container-fluid" style={{ border: "1px solid pink" }}>
			<Navbar />
			<Intro />
			<Background />
			<Skills skills={skills} />
			<Projects />
		</div>
	);
}

export default App;
