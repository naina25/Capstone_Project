import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
    const [passList, setPassList] = useState([{ value: "1" }]);
    const addPassenger = () => {
        setPassList((prev) => {
            return [...prev, { value: "" }];
        });
    };
    // const removePassenger = () => {
    //     passList.filter((i, j) => index !== j);
    //     setPassList(passList);
    // };
    return (
        <form className="form-popup" id="myForm">
            <h1>Passenger Details</h1>
            {passList.map((singlepass, index) => (
                <div key={index} className="form-content">
                    <span className="book-input">
                        <input
                            id="name"
                            placeholder="Passenger Name"
                            required
                        />
                    </span>
                    <span className="book-input">
                        <input
                            type="number"
                            id="age"
                            placeholder="Age"
                            required
                        />
                    </span>
                    <span className="book-input">
                        <select id="gender" placeholder="Gender">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </span>
                    <span className="book-input">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                        ></input>
                    </span>
                    <span>
                        <button
                            className="remove-btn"
                            onClick={() => {
                                const remove = passList.filter((i, j) => {
                                    return index !== j;
                                });
                                setPassList(remove);
                            }}
                        >
                            X
                        </button>
                    </span>
                </div>
            ))}
            <div className="add-user">
                {/* {passList.length - 1 === index && (
                    <button type="button" className="add-btn">
                        + Add passenger
                    </button>
                )} */}
                <button className="add-btn" onClick={addPassenger}>
                    + Add Passenger
                </button>
            </div>
            <div className="submitadd-btn">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default BookNow;
