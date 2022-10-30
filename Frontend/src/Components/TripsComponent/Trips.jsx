import React, { useEffect, useState } from "react";
import "./Trips.css";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import axios from "axios";

function Trips() {
	const [trips, setTrips] = useState([]);
	const getTrips = async () => {
		await axios.get("https://localhost:44387/api/trip").then((res) => {
			setTrips(res.data);
		});
	};

	useEffect(() => {
		getTrips();
	}, []);

	return (
		<div className="container2">
			<div className="trips-h1">
				<DirectionsBusIcon />
				<h1> Recent Trips</h1>
			</div>
			<hr />
			<table width="100%">
				<thead>
					<tr>
						<th>Date</th>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Departure City</th>
						<th>Destination City</th>
						<th>Fare</th>
						<th>U-ID</th>
					</tr>
				</thead>
				<tbody>
					{trips.map((trip, index) => {
						return (
							<tr>
								<td>{trip.Departure_Time_Date.slice(0, 10)}</td>
								<td>{trip.passenger_name}</td>
								<td>{trip.passenger_age}</td>
								<td>{trip.passenger_gender}</td>
								<td>{trip.Departure_City}</td>
								<td>{trip.Destination_City}</td>
								<td>{trip.cost}</td>
								<td>{trip.passenger_uid}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
export default Trips;
