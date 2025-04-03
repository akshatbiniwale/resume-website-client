import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProf from "./sections/TechnicalProf";
import Aboutme from "./sections/Aboutme";
import MyProjects from "./sections/MyProjects";
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';

const App = () => {
	return (
		<>
			<div className="xl:mx-32 mb-52">
				<Navbar />
				<Hero />
				<TechnicalProf />
				<Aboutme />
				<MyProjects />
				<ContactMe />
			</div>
			<Footer />
		</>
	);
};

export default App;
