import React from "react";
import ProfileInfo from "../Components/ProfileComponent/ProfileInfo/ProfileInfo";
import ProfileSidebar from "../Components/ProfileComponent/ProfileSidebar/ProfileSidebar";

const Profile = () => {
    return (
        <section className="profile-section">
            <ProfileSidebar />
            <ProfileInfo />
        </section>
    );
};

export default Profile;
