import "./LoginForm.css";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			Username: username,
			Password: password,
		};

		await axios
			.post("https://localhost:44387/api/login", data)
			.then((res) => {
				const token = res.data;
				const cookies = new Cookies();
				cookies.set("my_cookie", token);
				navigate("/");
				window.location.reload();
			})
			.catch(() => {
				alert("Incorrect credentials");
			});
	};

	return (
		<div className="login-form">
			<div className="heading-banner">
				<h2>Welcome Back!</h2>
			</div>
			<form onSubmit={handleSubmit} className="form-body">
				<div className="login-inputs">
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						placeholder="Enter Username"
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="on"
					></input>
				</div>
				<div className="login-inputs">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						placeholder="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="off"
					></input>
				</div>
				<button type="submit">Login</button>
				<Link className="signup-link" to="/signup">
					Not registered? Sign up now!!
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
