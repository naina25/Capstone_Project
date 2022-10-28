import "./BusPage.css";
import React from "react";
import BusCards from "../BusCards/BusCards";
import Sidefilter from "../SideFilter/Sidefilter";

const BusPage = ({ routes }) => {
    return (
        <div className="bus-page">
            <Sidefilter />
            <div className="bus-cards-section">
                {routes.length !== 0 ? (
                    routes.map((route, index) => (
                        <BusCards
                            key={index}
                            departureCity={route.Departure_City}
                            destinationCity={route.Destination_City}
                            fare={route.Cost}
                            seats={route.Total_seats}
                        />
                    ))
                ) : (
                    <div className="noBusesMsg">
                        <h2>No Buses Available for the selected date!!</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusPage;
