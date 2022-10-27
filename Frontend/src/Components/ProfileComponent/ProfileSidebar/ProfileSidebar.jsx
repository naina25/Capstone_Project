import "./ProfileSidebar.css";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ProfileSidebar = (props) => {
    return (
        <div className="profile-sidebar">
            <div className="user-info">
                <AccountCircleOutlinedIcon
                    sx={{ "font-size": "7rem", color: "#da0f32" }}
                />
                <h3>User Name</h3>
                <p>Phone Number</p>
            </div>
            <div className="profile-options">
                <ul>
                    <li onClick={()=>{props.setActiveState("profile")}}>Profile</li>
                    <li onClick={()=>{props.setActiveState("trips")}}>Trips</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSidebar;
