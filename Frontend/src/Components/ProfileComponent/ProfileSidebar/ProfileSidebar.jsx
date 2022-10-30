import "./ProfileSidebar.css";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuth } from "../../../Context/auth.context";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = (props) => {
	const { logout } = useAuth();

	const navigate = useNavigate();
	return (
		<div className="profile-sidebar">
			<div className="user-info">
				<AccountCircleOutlinedIcon
					sx={{ "font-size": "7rem", color: "#da0f32" }}
				/>
				<h3>{props.userDetails.User_name}</h3>
				<p>{props.userDetails.User_Phone_Number}</p>
			</div>
			<div className="profile-options">
				<ul>
					<li
						onClick={() => {
							props.setActiveState("profile");
						}}
					>
						Profile
					</li>
					<li
						onClick={() => {
							props.setActiveState("trips");
						}}
					>
						Trips
					</li>
					<li
						onClick={() => {
							logout();
							navigate("/");
							window.location.reload();
						}}
					>
						Log Out
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileSidebar;
