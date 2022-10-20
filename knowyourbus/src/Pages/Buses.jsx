import React from "react";
// import BusCards from "../Components/BusesComponent/BusCards/BusCards";
// import Amenities from "../Components/BusesComponent/Amenities/Amenities";
// import Policies from "../Components/BusesComponent/Policies/Policies";
import SearchForm from "../Components/SearchForm/SearchForm";
import BusPage from "../Components/BusesComponent/BusPage/BusPage";

const Buses = () => {
	return (
		<section className="buses-section">
			<SearchForm />
			<BusPage />
		</section>
	);
};

export default Buses;
