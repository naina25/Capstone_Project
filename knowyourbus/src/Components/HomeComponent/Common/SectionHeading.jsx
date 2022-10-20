import React from "react";

const SectionHeading = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
            <h4>{props.subtitle}</h4>
        </div>
    );
};

export default SectionHeading;
 