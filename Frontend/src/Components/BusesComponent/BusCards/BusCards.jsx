import "./BusCards.css";
import React, { useState } from "react";
import Amenities from "../Amenities/Amenities";
import Policies from "../Policies/Policies";
import BookNow from "../BookNow/BookNow";
import ProtectedRoute from "../../../Routes/ProtectedRoute";

const BusCards = (props) => {
	const [showAmenities, setShowAmenities] = useState(false);
	const [showPolicies, setShowPolicies] = useState(false);
	const [openBookNow, setOpenBookNow] = useState(false);

	const openBookNowComp = {
		visibility: "visible",
		opacity: "1",
		transition: "0.4s",
	};

	const closeBookNowComp = {
		opacity: "0",
		transition: "0.4s",
	};
	const showAmenitiesStyle = {
		opacity: "1",
		transition: "0.4s",
	};
	const hideAmenitiesStyle = {
		opacity: "0",
		transition: "0.4s",
	};
	const showPoliciesStyle = {
		position: "fixed",
		right: "0",
		top: "6rem",
		transition: "0.4s",
	};
	const hidePoliciesStyle = {
		position: "fixed",
		right: "-500px",
		top: "6rem",
		transition: "0.4s",
	};

	return (
		<div className="bus-details">
			<div className="bus-cards">
				<div className="bus-card-info">
					<div className="travel-info">
						<div className="boarding-info timing-info">
							<p>Boarding Time: 25/10/2022</p>
							<p>09:45</p>
							<h2>{props.departureCity}</h2>
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
							<h2>{props.destinationCity}</h2>
							<p>Dropping point</p>
							<p className="location-points">Alambagh</p>
						</div>
					</div>
					<div className="bus-card-links">
						<button
							type={"button"}
							onClick={() => setShowAmenities(!showAmenities)}
						>
							Amenities
						</button>
						<button
							type={"button"}
							onClick={() => {
								console.log(showPolicies);
								setShowPolicies(!showPolicies);
							}}
						>
							Policies
						</button>
					</div>
				</div>
				<div className="bus-booking-card">
					<div className="bus-booking-info">
						<div className="fare-info">
							<p>Basic fare per seat</p>
							<h2>₹ {props.fare}</h2>
						</div>
						<div className="fare-info">
							<p>Seats available</p>
							<h2>{props.seats}</h2>
						</div>
					</div>
					<button
						type="submit"
						className="book-btn"
						onClick={() => {
							setOpenBookNow(!openBookNow);
						}}
					>
						Book Now
					</button>
				</div>
			</div>
			<div
				style={showAmenities ? showAmenitiesStyle : hideAmenitiesStyle}
			>
				<Amenities />
			</div>
			<div style={showPolicies ? showPoliciesStyle : hidePoliciesStyle}>
				<Policies />
			</div>
			<div
				className="book-div"
				style={openBookNow ? openBookNowComp : closeBookNowComp}
			>
				{openBookNow && (
					<ProtectedRoute>
						<BookNow />
					</ProtectedRoute>
				)}
			</div>
		</div>
	);
};

export default BusCards;
