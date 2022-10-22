import "./BusPage.css";
import React, { useState } from "react";
import BusCards from "../BusCards/BusCards";
import Sidefilter from "../SideFilter/Sidefilter";
import axios from "axios";

const BusPage = () => {
	const [routes, setRoutes] = useState();

	const getBuses = async () => {
		await axios.get("https://localhost:44387/api/routes").then((res) => {
			console.log(res.data);
			setRoutes(res.data);
		});
	};

	getBuses();

	return (
		<div className="bus-page">
			<Sidefilter />
			<div className="bus-cards-section">
				{routes &&
					routes.map((route) => (
						<BusCards
							departureCity={route.Departure_City}
							destinationCity={route.Destination_City}
							fare={route.Cost}
							seats={route.Total_seats}
						/>
					))}
			</div>
		</div>
	);
};

export default BusPage;
