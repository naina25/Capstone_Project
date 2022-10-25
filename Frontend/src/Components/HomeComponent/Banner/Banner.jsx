import React from "react";
import SearchForm from "../../SearchForm/SearchForm";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="home" id="home">
            <div className="banner-content">
                <h3>Book your bus from here with lowest prices</h3>
                <h3>
                    {" "}
                    <span>Know Your Bus</span>
                </h3>
                <SearchForm />
            </div>
        </section>
    );
};

export default Banner;
