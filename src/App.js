import "./App.css";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Projects from "./components/Projects";
import { Button } from "react-bootstrap";

function App() {
	return (
		<div>
			<Intro />
			<Background />
			<Projects />
		</div>
	);
}

export default App;
