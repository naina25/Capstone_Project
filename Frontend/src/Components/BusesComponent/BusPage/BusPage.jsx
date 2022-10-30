import "./BusPage.css";
import React, { useEffect, useState } from "react";
import BusCards from "../BusCards/BusCards";
import Sidefilter from "../SideFilter/Sidefilter";
import axios from "axios";

const BusPage = () => {
	const [routes, setRoutes] = useState();
	const [sortType,setSortType]=useState("")

	const getBuses = async () => {
		await axios.get("https://localhost:44387/api/routes").then((res) => {
			console.log(res.data);
			setRoutes(res.data);
		});
	};

	useEffect(() => {
		getBuses();
	}, []);

	const handelSort=async(val)=>{
		
		return await axios.get(`https://localhost:44387/api/Sort/${val}`).then((res)=>{
			setRoutes(res.data)
		})
	}

	return (
		<div className="bus-page">
			<>
			<div id="sidebar">
				<div className="filter-div">
						<h6>Sort</h6>
					<h6 className="p-1 border-bottom">DEPARTURE TIME</h6>
					  <input type="radio" name="sort"  onClick={()=>handelSort("Departure_Time_Date DESC")}/>
					  <label className="radio_text">Descending</label><br/>
					  <input type="radio" id="css" name="sort" onClick={()=>handelSort("Departure_Time_Date ASC")}/>
					  <label className="radio_text">Ascending</label>
					<br/>
				</div>
				<div className="filter-div">
					<h6 className="p-1 border-bottom">Travel Cost</h6>
					  <input type="radio" name="sort"  onClick={()=>handelSort("Cost DESC")}/>
					  <label className="radio_text">Descending</label><br/>
					  <input type="radio" id="css" name="sort" onClick={()=>handelSort("Cost ASC")}/>
					  <label className="radio_text">Ascending</label>
					<br/>
				</div>
			</div>
		</>
			{/* <li>
				<input type="checkbox" className="ut_list" onChange={()=>handelSort("Departure_Time_Date")} />
				Departure_Time_Date
			</li> */}

			<div className="bus-cards-section">
			{routes &&
					routes.map((route, index) => (
						<BusCards
							key={index}
							departureCity={route.Departure_City}
							destinationCity={route.Destination_City}
							fare={route.Cost}
							seats={route.Total_seats}
							departure_Time_Date={route.Departure_Time_Date}
							destination_Time_Date={route.Destination_Time_Date}
						/>
					))}

			</div>
		</div>
	);
};

export default BusPage;
