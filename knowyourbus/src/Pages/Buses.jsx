import React from "react";
import Sidefilter from "../Components/BusesComponent/Sidefilter";
import Amenities from "../Components/BusesComponent/Amenities/Amenities";
import Policies from "../Components/BusesComponent/Policies/Policies";

const Buses = () => {
    return <section className="ut_background_bus">
        <Sidefilter/>
         <Amenities />
         <Policies />
        </section>;
};

export default Buses;
