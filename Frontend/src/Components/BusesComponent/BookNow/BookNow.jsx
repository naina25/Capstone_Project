import React, { useEffect, useState } from "react";
import "./BookNow.css";
import axios from "axios";
import { useAuth } from "../../../Context/auth.context";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";

const BookNow = (props) => {
    const [passList, setPassList] = useState([{ value: "" }]);
    // const [passinfo, setPassInfo] = useState();
    const { userToken } = useAuth();
    const userId = jwt_decode(userToken).User_id;
    console.log(userId);
    const [passengerDetails, setPassengerDetails] = useState({
        routeid: props.routeid,
        userid: userId,
        passengername: "",
        age: "",
        gender: "",
        email: "",
        uid: "",
    });

    const [passDetailsArr, setPassDetailsArr] = useState([
        {
            routeid: props.routeid,
            userid: userId,
            passengername: "",
            age: "",
            gender: "",
            email: "",
            uid: "",
        },
    ]);

    // useEffect(() => {
    //     setPassDetailsArr((prev) => {
    //         return [...prev, passengerDetails];
    //     });
    //     console.log(passDetailsArr);
    // }, [passengerDetails]);

    useEffect(() => {
        console.log(passDetailsArr);
    }, [passDetailsArr]);

    const addPassenger = () => {
        setPassDetailsArr((prevArr) => [...prevArr, passengerDetails]);
        setPassList((prev) => {
            return [...prev, { value: "" }];
        });
    };
    const navigate = useNavigate();

    const postPassenger = async () => {
        axios
            .post(
                "https://localhost:44387/api/Bookings/BookNow",
                passDetailsArr
            )
            .then((res) => {
                console.log(res.data);
                alert("Ticket booked successfully!!");
            });
        navigate("/");
    };

    const handleChangeName = (index, e) => {
        setPassDetailsArr((passArr) => {
            return passArr.map((pass, i) => {
                if (i === index) {
                    console.log(i);
                    return { ...pass, passengername: e.target.value };
                } else return pass;
            });
        });
    };
    const handleChangeEmail = (index, e) => {
        setPassDetailsArr((passArr) => {
            return passArr.map((pass, i) => {
                if (i === index) {
                    console.log(i);
                    return { ...pass, email: e.target.value };
                } else return pass;
            });
        });
    };
    const handleChangeAge = (index, e) => {
        setPassDetailsArr((passArr) => {
            return passArr.map((pass, i) => {
                if (i === index) {
                    console.log(i);
                    return { ...pass, age: e.target.value };
                } else return pass;
            });
        });
    };
    const handleChangeGender = (index, e) => {
        setPassDetailsArr((passArr) => {
            return passArr.map((pass, i) => {
                if (i === index) {
                    console.log(i);
                    return { ...pass, gender: e.target.value };
                } else return pass;
            });
        });
    };
    const handleChangeUid = (index, e) => {
        setPassDetailsArr((passArr) => {
            return passArr.map((pass, i) => {
                if (i === index) {
                    console.log(i);
                    return { ...pass, uid: e.target.value };
                } else return pass;
            });
        });
    };

    // const removePassenger = () => {
    //     passList.filter((i, j) => index !== j);
    //     setPassList(passList);
    // };
    return (
        <form className="form-popup" id="myForm" onSubmit={postPassenger}>
            <h1>Passenger Details</h1>
            {passList.map((singlepass, index) => (
                <div key={index} className="form-content">
                    <span className="book-input">
                        <input
                            id="name"
                            placeholder="Passenger Name"
                            required
                            onChange={(e) => {
                                handleChangeName(index, e);
                            }}
                        />
                    </span>
                    <span className="book-input">
                        <input
                            type="number"
                            id="age"
                            placeholder="Age"
                            required
                            onChange={(e) => {
                                handleChangeAge(index, e);
                            }}
                        />
                    </span>
                    <span className="book-input">
                        <select
                            id="gender"
                            placeholder="Gender"
                            onChange={(e) => {
                                handleChangeGender(index, e);
                            }}
                        >
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
                            onChange={(e) => {
                                handleChangeEmail(index, e);
                            }}
                        ></input>
                    </span>
                    <span className="book-input">
                        <input
                            type="number"
                            id="adhaar"
                            placeholder="Adhaar"
                            onChange={(e) => {
                                handleChangeUid(index, e);
                            }}
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
                <button
                    className="add-btn"
                    onClick={() => {
                        // passArray.push({});
                        addPassenger();
                    }}
                >
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
