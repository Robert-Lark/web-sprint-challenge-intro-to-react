import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import Character from "././components/Character.js";

const App = () => {
	const [image, setImage] = useState([]);

	useEffect(() => {
		Axios.get(`https://swapi.dev/people/`)
			.then((results) => {
				console.log("Results from useEffect of NasaAPI", results);
				setImage(results.data);
				console.log(results.data);
			})
			.catch((err) => {
				console.log("Error occured in useEffect of NasaAPI: ", err);
			});
	}, []);
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<Character image={image} />
		</div>
	);
};

export default App;
