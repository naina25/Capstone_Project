import React from "react";
import Amenities from "../Components/BusesComponent/Amenities/Amenities";
import Policies from "../Components/BusesComponent/Policies/Policies";

const Buses = () => {
    return (
        <section className="busees-section">
            <Amenities />
            <Policies />
        </section>
    );
};

export default Buses;
