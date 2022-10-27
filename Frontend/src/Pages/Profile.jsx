
import React, { useState } from "react";
import ProfileInfo from "../Components/ProfileComponent/ProfileInfo/ProfileInfo";
import ProfileSidebar from "../Components/ProfileComponent/ProfileSidebar/ProfileSidebar";
import Trips from "../Components/TripsComponent/Trips";

import ProfilePage from "../Components/ProfileComponent/ProfilePage";


const Profile = () => {
    const [active,setActive]=useState("profile")
    return (
        <section className="profile-section">

            <ProfileSidebar activeState={active} setActiveState={setActive}/>
            {active==="profile" &&<ProfileInfo />}
            {active==="trips"&&<Trips/>}

            <ProfilePage />

        </section>
    );
};

export default Profile;
