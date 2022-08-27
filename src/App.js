import "./App.css";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { Button } from "react-bootstrap";

function App() {
	return (
		<div className="container-fluid" style={{ border: "1px solid pink" }}>
			<Navbar />
			<Intro />
			<Background />
			<Projects />
		</div>
	);
}

export default App;
