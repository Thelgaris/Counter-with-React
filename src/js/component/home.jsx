import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((time) => time + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="d-flex counter">
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border ">
				<FontAwesomeIcon icon={faClock} />
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border">
				{Math.floor(time / 100000) % 10}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border">
				{Math.floor(time / 10000) % 10}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border">
				{Math.floor(time / 1000) % 10}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border">
				{Math.floor(time / 100) % 10}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border">
				{Math.floor(time / 10) % 10}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center border">
				{time % 10}
			</div>
		</div>
	);
};

export default Home;
