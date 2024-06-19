import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Survey from "./components/survey";

import Help from "./components/Selfhelp";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/survey" element={<Survey />} />
					<Route path="/help" element={<Help />} />
					<Route path="/credits" element={<Credits />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
