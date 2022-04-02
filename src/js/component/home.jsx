import React, { useState, useEffect } from "react";

const Home = () => {
	const [time, setTime] = useState(0);
	const [time10, setTime10] = useState(0);
	const [time100, setTime100] = useState(0);
	const [time1000, setTime1000] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((time) => time + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		const interval10 = setInterval(() => {
			setTime10((time10) => time10 + 1);
		}, 10000);
		return () => clearInterval(interval10);
	}, []);
	useEffect(() => {
		const interval100 = setInterval(() => {
			setTime10((time100) => time100 + 1);
		}, 100000);
		return () => clearInterval(interval100);
	}, []);
	useEffect(() => {
		const interval1000 = setInterval(() => {
			setTime10((time1000) => time1000 + 1);
		}, 100000);
		return () => clearInterval(interval1000);
	}, []);

	return (
		<div className="d-flex">
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center mx-2">
				{time}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center mx-2">
				{time10}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center mx-2">
				{time100}
			</div>
			<div
				style={{ height: "3rem", width: "3rem" }}
				className="bg-dark text-white text-center mx-2">
				{time1000}
			</div>
		</div>
	);
};

export default Home;
