import React, { useState, useEffect } from "react";

import Square from "./Square";

const GameBoard = () => {
	const [isPlayerOne, setIsPlayerOne] = useState(true);

	const handleClick = () => {
		// changes player 1 to player 2
		setIsPlayerOne(!isPlayerOne);
	};

	useEffect(() => {
		// attach listener for click events
		document.addEventListener("click", handleClick);
		// return a clean-up function to remove click handler
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [isPlayerOne]);
	const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<>
			{isPlayerOne ? "Player 1" : "Player 2"}
			<div className="gameboard">
				{squares.map((sq, i) => {
					return <Square key={i} player={isPlayerOne} />;
				})}
			</div>
		</>
	);
};

export default GameBoard;
