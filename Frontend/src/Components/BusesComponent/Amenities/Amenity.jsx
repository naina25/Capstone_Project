import React from "react";

const Amenity = (props) => {
    return (
        <div className="amenity-div">
            <props.icon />
            <p>{props.amenity}</p>
        </div>
    );
};

export default Amenity;
