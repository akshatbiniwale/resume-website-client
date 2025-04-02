import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProf from "./sections/TechnicalProf";
import Aboutme from "./sections/Aboutme";

const App = () => {
	return (
		<div className="xl:mx-32">
			<Navbar />
			<Hero />
			<TechnicalProf />
			<Aboutme />
		</div>
	);
};

export default App;
