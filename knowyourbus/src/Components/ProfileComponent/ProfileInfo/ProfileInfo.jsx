import React from "react";
import "./ProfileInfo.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileInfo = () => {
    return (
        <div className="profileInfo-div">
            <div className="title">
                <AccountCircleIcon />
                <h2>Personal Information</h2>
            </div>
            <hr />
            <div className="userinfo-div">
                <div className="info">
                    <p className="label">First Name</p>
                    <p>Naina</p>
                </div>
                <div className="info">
                    <p className="label">Last Name</p>
                    <p>Upadhyay</p>
                </div>
                <div className="info">
                    <p className="label">Gender</p>
                    <p>Female</p>
                </div>
                <div className="info">
                    <p className="label">Email Id</p>
                    <p>nanu02d8@gmail.com</p>
                </div>
                <div className="info">
                    <p className="label">Contact number</p>
                    <p>9886768973</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
