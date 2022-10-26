import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";

const ProfilePage = () => {
    const [userDetails, setUserDetails] = useState({});

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
            <ProfileSidebar userDetails={userDetails} />
            <ProfileInfo userDetails={userDetails} />
        </>
    );
};

export default ProfilePage;
