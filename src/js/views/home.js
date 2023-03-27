import React, { useEffect, useState } from "react";
import rick from "../../img/rick.png";
import "../../styles/home.css";
import { Carta } from "./carta";


export const Home = () => {

	const [character, setCharacter] = useState([])
	const [inputValue, setInpuValue] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			let allCharacters = [];
			let nextPage = 1;
			let totalPages = 1;

			while (nextPage <= totalPages) {
				const response = await fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`);
				const data = await response.json();
				console.log(data)
				allCharacters = allCharacters.concat(data.results);
				totalPages = data.info.pages;
				nextPage++;
			}

			setCharacter(allCharacters);
		};

		fetchData();
	}, []);


	const filteredCharacters = character.filter(item =>
		item.name.toLowerCase().includes(inputValue.toLowerCase())
	);

	return (
		<div className="text-center mt-5">
			<h1>Rick y Morty</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(event) => setInpuValue(event.target.value)}
			/>
			<Carta character={filteredCharacters} />
		</div>
	)
};