import "./SignUpForm.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
	const [username, setUsername] = useState("");
	const [firstname, setFirstname] = useState("");
	const [password, setPassword] = useState("");
	const [phoneno, setPhoneno] = useState("");
	const [pan, setPan] = useState("");
	const [aadhar, setAadhar] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			User_Name: username,
			User_First_Name: firstname,
			User_Password: password,
			User_Phone_Number: phoneno,
			UserPAN: pan,
			UserAadhar: aadhar,
		};

		await axios
			.post("https://localhost:44387/api/Users", data)
			.then((res) => {
				alert("User added successfully!");
				navigate("/");
			})
			.catch(() => {
				alert("Some error occurred");
			});
	};

	return (
		<div className="login-form">
			<div className="heading-banner">
				<h2>Welcome Onboard! Sign Up Now</h2>
			</div>
			<form onSubmit={handleSubmit} className="form-body">
				<div className="signup-inputs login-inputs">
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						placeholder="Enter Username"
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="on"
					></input>
				</div>
				<div className="signup-inputs login-inputs">
					<label htmlFor="username">First Name</label>
					<input
						id="username"
						type="text"
						placeholder="Enter First Name"
						onChange={(e) => setFirstname(e.target.value)}
						autoComplete="on"
					></input>
				</div>
				<div className="signup-inputs login-inputs">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						placeholder="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="off"
					></input>
				</div>
				<div className="signup-inputs login-inputs">
					<label htmlFor="username">Phone No.</label>
					<input
						id="username"
						type="text"
						placeholder="Enter Phone Number"
						onChange={(e) => setPhoneno(e.target.value)}
						autoComplete="on"
					></input>
				</div>
				<div className="signup-inputs login-inputs">
					<label htmlFor="username">PAN No.</label>
					<input
						id="username"
						type="text"
						placeholder="Enter PAN"
						onChange={(e) => setPan(e.target.value)}
						autoComplete="on"
					></input>
				</div>

				<div className="signup-inputs login-inputs">
					<label htmlFor="username">Aadhar No.</label>
					<input
						id="username"
						type="text"
						placeholder="Enter Aadhar Number"
						onChange={(e) => setAadhar(e.target.value)}
						autoComplete="on"
					></input>
				</div>

				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
