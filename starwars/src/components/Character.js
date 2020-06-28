// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
	const WrapperDiv = styled.div`
		width: 100%;
		height: 100%;
	`;

	return (
		<WrapperDiv>
			<div className="App">
				<h1 className="Header">{props.bio.name}</h1>
				<h2>{props.bio.birth_year}</h2>
				<h2>{props.bio.eye_color}</h2>
				<h2>{props.bio.gender}</h2>
				<h2>{props.bio.hair_color}</h2>
				<h2>{props.bio.height}</h2>
				<h2>{props.bio.mass}</h2>
				<h2>{props.bio.skin_color}</h2>
			</div>
		</WrapperDiv>
	);
};

export default Character;
