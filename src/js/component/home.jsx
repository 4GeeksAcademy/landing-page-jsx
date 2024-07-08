import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./hero";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<div>
			<Navbar/>
		</div>
		<div className="container pb-2">
		<div>
			<Jumbotron/>
		</div>
		<div>
			<Card/>
		</div>
		</div>
		<div>
			<Footer/>
		</div>
		</div>
	);
};

export default Home;
