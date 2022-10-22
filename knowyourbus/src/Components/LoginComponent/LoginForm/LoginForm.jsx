import "./LoginForm.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const LoginForm = () => {
	const [success, setSuccess] = useState(false);
	const [Password, setPassword] = useState("");
	const [Username, setUsername] = useState("");
	const [JwtToken, setJwtToken] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			Username: Username,
			Password: Password,
		};

		await axios
			.post("https://localhost:44387/api/login", data)
			.then((res) => {
				localStorage.setItem("token", res.token);
				console.log(data);

				alert("login done");
				setSuccess(true);

				const token = res.data;
				console.log(res.data);

				let decoded = jwt_decode(token);
				console.log(decoded);
				setJwtToken(decoded);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (JwtToken) {
			console.log("founded", JwtToken);
			console.log("Name", JwtToken.User_Name);
		}
	}, [JwtToken]);

	return (
		<>
			{success ? (
				<section>
					<div class="main-content">
						<div className="card">
							{/* <h2 >hi {JwtToken.User_Name}</h2> */}
							<img
								className="profile_image"
								src="https://theutkarshgupta.com/wp-content/uploads/2021/02/webmaster2-about-pic1.png"
								alt="John"
							/>

							<h1>{JwtToken.User_Name}</h1>
							<p className="title">
								Contact No. {JwtToken.Phone}
							</p>
							<p>Harvard University</p>
							<div>
								<a href="#">
									<i className="fa fa-dribbble"></i>
								</a>
								<a href="#">
									<i className="fa fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fa fa-linkedin"></i>
								</a>
								<a href="#">
									<i className="fa fa-facebook"></i>
								</a>
							</div>
							<p>
								<button>Contact</button>
							</p>
						</div>
					</div>
				</section>
			) : (
				<div className="login-form-div">
					<div className="banner">
						<h2>Login to your Account</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<label>
							Email
							<input
								className="login-input"
								// type="email"
								name=""
								placeholder="Enter your email"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</label>
						<label>
							Password
							<input
								className="login-input"
								type="password"
								placeholder="Enter Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>

						<button className="login-btn">Login</button>
					</form>
				</div>
			)}
		</>

		// <div className="login-form-div">
		// 	<div className="banner">
		// 		<h2>Login to your Account</h2>
		// 	</div>
		// 	<form>
		// 		<label>
		// 			Email
		// 			<input
		// 				className="login-input"
		// 				type="email"
		// 				name=""
		// 				placeholder="Enter your email"
		// 			/>
		// 		</label>
		// 		<label>
		// 			Password
		// 			<input
		// 				className="login-input"
		// 				type="password"
		// 				placeholder="Enter Password"
		// 			/>
		// 		</label>

		// 		<button className="login-btn" type="submit">
		// 			Login
		// 		</button>
		// 	</form>
		// </div>
	);
};

export default LoginForm;
