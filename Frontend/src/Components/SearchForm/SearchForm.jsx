import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchForm = () => {
	const [cities, setCities] = useState([]);

	const [city1, setCity1] = useState("");
	const [city2, setCity2] = useState("");

	const getCities = async () => {
		await axios.get("https://localhost:44387/api/city").then((res) => {
			console.log(res.data);
			setCities(
				res.data.map((city, index) => {
					return city.City_name;
				})
			);
		});
	};

	useEffect(() => {
		getCities();
	}, []);

	const handleChange1 = (e) => {
		setCity1(e.target.value);
	};

	const handleChange2 = (e) => {
		setCity2(e.target.value);
	};

	const cityMap = cities.map((val, index) => {
		if (val !== city1 && val !== city2) {
			return <option key={index} value={val} />;
		} else return <option key={index}></option>;
	});

	return (
		<form className="search-form">
			<input
				className="form-dep"
				type="text"
				placeholder="From"
				list="cityOneName"
				onChange={handleChange1}
			/>
			<datalist id="cityOneName">{cityMap}</datalist>
			<div>
				<input
					className="form-des"
					type="text"
					placeholder="To"
					list="cityTwoName"
					onChange={handleChange2}
				/>
				<datalist id="cityTwoName">{cityMap}</datalist>
			</div>
			<div>
				<input className="date" type="date" placeholder="Choose Date" />
			</div>
			<button type="submit">
				<SearchIcon />
			</button>
		</form>
	);
};

export default SearchForm;
