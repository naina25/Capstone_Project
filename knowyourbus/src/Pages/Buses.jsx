import React from "react";
import BusCards from "../Components/BusesComponent/BusCards/BusCards";
import Amenities from "../Components/BusesComponent/Amenities/Amenities";
import Policies from "../Components/BusesComponent/Policies/Policies";

const Buses = () => {
	return (
		<section className="busees-section">
			<BusCards />
			<Amenities />
			<Policies />
		</section>
	);
};

export default Buses;
