import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Trips from "../TripsComponent/Trips";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";

const ProfilePage = () => {
    const [userDetails, setUserDetails] = useState({});
    const [active,setActive]=useState("profile")

    let userId = useParams().user_id;
    console.log(userId);

    const getUser = async () => {
        await axios
            .get(`https://localhost:44387/api/users/${userId}`)
            .then((res) => {
                console.log(res.data);
                setUserDetails(res.data[0]);
            });
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <ProfileSidebar activeState={active} setActiveState={setActive} userDetails={userDetails}/>
            {active==="profile" &&<ProfileInfo userDetails={userDetails} />}
            {active==="trips"&&<Trips/>}

        </>
    );
};

export default ProfilePage;
