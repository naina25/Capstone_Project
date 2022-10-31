import "./BusPage.css";
import React,{ useState,useEffect } from "react";
import BusCards from "../BusCards/BusCards";
import Sidefilter from "../SideFilter/Sidefilter";
import axios from "axios";


const BusPage = ({ routes, setRoutes }) => {
    //  const [routes, setRoutes] = useState();
    const [value,setValue]=useState();
    const [formData,setFormData]=useState(
        {
            departure_city: routes.city1,
            destination_city: routes.city2,
            departure_date: routes.departDate,
            Sort_Value:value,
        }
    )
    // const formData = {
    //     departure_city: routes.city1,
    //     destination_city: routes.city2,
    //     departure_date: routes.departDate,
    //     Sort_Value:value,
    // };

    const getBuses = async () => {

        await axios.get("https://localhost:44387/api/routes").then((res) => {

            console.log(res.data);

            setRoutes(res.data);

        });

    };

    useEffect(() => {

        getBuses();
        const execSort=async()=>{
            return await axios.post("https://localhost:44387/api/Sort/Sort", formData).then((res)=>{
                setRoutes(res.data);
            })
        }
        if(formData.Sort_Value){
            console.log(formData.Sort_Value);
            execSort();
            console.log("success");
        }

    }, [formData]);



    const handelSort=async(val)=>{
        setFormData(prevData=>{
            return{
                ...prevData,Sort_Value:val
            }
        });
    }
    
    return (
        <div className="bus-page">
                        <>

                        <div id="sidebar">

                            <div className="filter-div">

                                    <h6>Sort</h6>

                                <h6 className="p-1 border-bottom">DEPARTURE TIME</h6>

                                <input type="radio" name="sort"  onClick={()=>handelSort("Cost")}/>

                                <label className="radio_text">Descending</label><br/>

                                <input type="radio" id="css" name="sort" onClick={()=>handelSort("Departure_Time_Date ASC")}/>

                                <label className="radio_text">Ascending</label>

                                <br/>

                            </div>
                            <div className="filter-div">

                                            <h6 className="p-1 border-bottom">Travel Cost</h6>

                                            <input type="radio" name="sort"  onClick={()=>handelSort("Cost DESC")}/>

                                            <label className="radio_text">Descending</label><br/>

                                            <input type="radio" id="css" name="sort" onClick={()=>handelSort("Cost ASC")}/>

                                            <label className="radio_text">Ascending</label>

                                            <br/>

                                        </div>

                                    </div>

                                </>
            <div className="bus-cards-section">
                {routes.length !== 0 ? (
                    routes.map((route, index) => (
                        <BusCards
                            key={index}
                            departureCity={route.Departure_City}
                            destinationCity={route.Destination_City}
                            fare={route.Cost}
                            seats={route.Total_seats}
                            routeid={route.Route_id}
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
