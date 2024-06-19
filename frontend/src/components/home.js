import React from "react";
import Quotes from "./Quotes";
import "./home.css";
import { useNavigate } from "react-router";
function Home() {
	let navigate = useNavigate();
	function surveypage() {
		navigate("/survey/");
	}
	return (
		<div>
			<Quotes></Quotes>
			<div className="main">
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#05386b" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,64C672,64,768,96,864,101.3C960,107,1056,85,1152,101.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg> */}
				{/* <h1>Depression-Diagnosis App</h1> */}
				<br />
				<h4>
					Factors influencing your work life can have effects on your mental
					health. Find out if current conditions in your organizations can have
					a effect on your mental health by taking this survey
				</h4>
				<br />
				<br />
				<button className="buttons" onClick={surveypage}>Take Quick Survey</button>
				<footer className="footers">
					<p>Made By Praj, Mayuri, Madhura and Manish <a class="credit-link" href="/credits">
						Credits
					</a></p>
				</footer>
			</div>
		</div>
	);
}

export default Home;
