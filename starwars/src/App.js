import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import Character from "././components/Character.js";

const App = () => {
	const [image, setImage] = useState([]);

	useEffect(() => {
		Axios.get(`https://swapi.py4e.com/api/people`)
			.then((image) => {
				//console.log("Results from useEffect of Star Wars API", image);
				setImage(image.data.results);
				console.log(image.data);
			})
			.catch((err) => {
				console.log("Error occured in useEffect of Star Wars API: ", err);
			});
	}, []);

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			 {image.map((c) => (
				<Character key={c.id} bio={c} />
			))}
		</div>
	);
};

export default App;
