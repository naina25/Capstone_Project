import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
    const [cities, setCities] = useState([]);
    const [city1, setCity1] = useState(
        props.routes ? props.routes[0] && props.routes[0].Departure_City : null
    );
    const [city2, setCity2] = useState(
        props.routes
            ? props.routes[0] && props.routes[0].Destination_City
            : null
    );
    const [departDate, setDepartDate] = useState(
        props.routes
            ? props.routes[0] &&
                  props.routes[0].Departure_Time_Date.slice(0, 10)
            : null
    );
    const [searchedData, setSearchedData] = useState();

    const navigate = useNavigate();

    const formData = {
        departure_city: city1,
        destination_city: city2,
        departure_date: departDate,
    };

    const getCities = async () => {
        await axios.get("https://localhost:44387/api/city").then((res) => {
            setCities(
                res.data.map((city, index) => {
                    return city.City_name;
                })
            );
        });
    };

    const sendFormData = async (e) => {
        e.preventDefault();
        await axios
            .post("https://localhost:44387/api/Routes/Search", formData)
            .then((res) => {
                console.log(res.data);
                setSearchedData(res.data);
            });
    };

    useEffect(() => {
        if (searchedData) navigate("/buses", { state: { searchedData } });
        else getCities();
    }, [searchedData, navigate]);

    const handleChangeDeparture = (e) => {
        setCity1(e.target.value);
    };

    const handleChangeDestination = (e) => {
        setCity2(e.target.value);
    };

    const handleChangeDate = (e) => {
        console.log(e.target.value);
        setDepartDate(e.target.value);
    };

    const cityMap = cities.map((val, index) => {
        if (val !== city1 && val !== city2) {
            return <option key={index} value={val} />;
        } else return <option key={index}></option>;
    });

    return (
        <form className="search-form" onSubmit={sendFormData}>
            <input
                className="form-dep"
                type="text"
                placeholder="From"
                list="cityOneName"
                onChange={handleChangeDeparture}
                value={city1}
            />
            <datalist id="cityOneName">{cityMap}</datalist>
            <div>
                <input
                    className="form-des"
                    type="text"
                    placeholder="To"
                    list="cityTwoName"
                    onChange={handleChangeDestination}
                    value={city2}
                />
                <datalist id="cityTwoName">{cityMap}</datalist>
            </div>
            <div>
                <input
                    className="date"
                    type="date"
                    placeholder="choose date"
                    onChange={handleChangeDate}
                    value={departDate}
                />
            </div>
            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    );
};

export default SearchForm;
