// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
	const WrapperDiv = styled.div`
		width: 100%;
		height: 100%;
		border: 5px solid darkBlue;
		margin-bottom: 10px;
	`;
	const InnerDiv = styled.div`
		margin: 0px 150px 0px 150px;
		box-shadow: 10px 10px azure;
		background: beige;
	`;

	return (
		<WrapperDiv>
			<div className="App">
				<h1 className="Header">{props.bio.name}</h1>
				<InnerDiv>
					<h2>BIRTH YEAR: {props.bio.birth_year}</h2>
				</InnerDiv>
				<InnerDiv>
					<h2>EYE COLOR: {props.bio.eye_color}</h2>
				</InnerDiv>
				<InnerDiv>
					<h2>GENDER: {props.bio.gender}</h2>
				</InnerDiv>

				<InnerDiv>
					<h2>HAIR COLOR: {props.bio.hair_color}</h2>
				</InnerDiv>
				<InnerDiv>
					<h2>HEIGHT: {props.bio.height}</h2>
				</InnerDiv>
				<InnerDiv>
					<h2>WEIGTH: {props.bio.mass}</h2>
				</InnerDiv>
				<InnerDiv>
					<h2>SKIN COLOR: {props.bio.skin_color}</h2>
				</InnerDiv>
			</div>
		</WrapperDiv>
	);
};

export default Character;
