import React, { useState } from "react";

const Square = ({ player }) => {
	const [state, setState] = useState(null);
	const handleClick = () => {
		if (state !== null) {
			return;
		}
		if (player) {
			setState(true);
		} else {
			setState(false);
		}
	};
	console.log(state);
	return (
		<div className="square" onClick={handleClick}>
			{state === null ? "" : state ? "X" : "O"}
		</div>
	);
};

export default Square;
