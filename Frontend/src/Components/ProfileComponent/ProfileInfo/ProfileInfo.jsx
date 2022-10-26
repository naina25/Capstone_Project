import React from "react";
import "./ProfileInfo.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileInfo = (props) => {
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
                    <p>{props.userDetails.User_first_Name}</p>
                </div>
                <div className="info">
                    <p className="label">Last Name</p>
                    <p>Dutta Bajpai</p>
                </div>
                <div className="info">
                    <p className="label">Gender</p>
                    <p>Male</p>
                </div>
                <div className="info">
                    <p className="label">Email Id</p>
                    <p>nanu02d8@gmail.com</p>
                </div>
                <div className="info">
                    <p className="label">Contact number</p>
                    <p>{props.userDetails.User_Phone_Number}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
