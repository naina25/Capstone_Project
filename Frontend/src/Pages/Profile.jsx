import React, { useState } from "react";
import ProfileInfo from "../Components/ProfileComponent/ProfileInfo/ProfileInfo";
import ProfileSidebar from "../Components/ProfileComponent/ProfileSidebar/ProfileSidebar";
import Trips from "../Components/TripsComponent/Trips";

const Profile = () => {
    const [active,setActive]=useState("profile")
    return (
        <section className="profile-section">
            <ProfileSidebar activeState={active} setActiveState={setActive}/>
            {active==="profile" &&<ProfileInfo />}
            {active==="trips"&&<Trips/>}
        </section>
    );
};

export default Profile;
