import React from "react";
import Banner from "../Components/HomeComponent/Banner/Banner";
import Cities from "../Components/HomeComponent/Cities/Cities";
import Offers from "../Components/HomeComponent/Offers/Offers";
import Reviews from "../Components/HomeComponent/Reviews/Reviews";
import Services from "../Components/HomeComponent/Services/Services";

const Home = () => {
    return (
        <>
            <Banner />
            <Offers />
            <Services />
            <Cities />
            <Reviews />
        </>
    );
};

export default Home;
