import "./BusCards.css";
import React from "react";

const BusCards = () => {
	return (
		// <div className="bus-page">
		// 	<div className="bus-filters"></div>
		<div className="bus-cards">
			<div className="bus-card-info">
				<div className="boarding-info timing-info">
					<p>Boarding Time: 25/10/2022</p>
					<p>09:45</p>
					<h2>Delhi</h2>
					<p>Boarding point</p>
					<p className="location-points">ANVT</p>
				</div>
				<div className="travel-time">
					<p>06H 30M</p>
					<hr />
				</div>
				<div className="arrival-info timing-info">
					<p>Arrival Time: 25/10/2022</p>
					<p>18:15</p>
					<h2>Lucknow</h2>
					<p>Dropping point</p>
					<p className="location-points">Alambagh</p>
				</div>
			</div>
			<div className="bus-booking-card">
				<div className="bus-booking-info">
					<div className="fare-info">
						<p>Basic fare per seat</p>
						<h2>₹ 997</h2>
					</div>
					<div className="fare-info">
						<p>Seats available</p>
						<h2>36</h2>
					</div>
				</div>
				<button type="submit" className="book-btn">
					Book Now
				</button>
			</div>
		</div>
		// </div>
	);
};

export default BusCards;
