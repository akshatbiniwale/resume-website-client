import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProf from "./sections/TechnicalProf";
import Aboutme from "./sections/Aboutme";
import MyProjects from "./sections/MyProjects";

const App = () => {
	return (
		<div className="xl:mx-32">
			<Navbar />
			<Hero />
			<TechnicalProf />
			<Aboutme />
			<MyProjects />
		</div>
	);
};

export default App;
