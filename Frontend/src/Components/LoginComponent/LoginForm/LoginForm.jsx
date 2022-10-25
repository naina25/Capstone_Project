import "./LoginForm.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const LoginForm = () => {
    const [success, setSuccess] = useState(false);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [JwtToken, setJwtToken] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            Username: username,
            Password: password,
        };

        await axios
            .post("https://localhost:44387/api/login", data)
            .then((res) => {
                localStorage.setItem("token", res.token);

                alert("login done");
                setSuccess(true);

                const token = res.data;

                let decoded = jwt_decode(token);
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
                                <a href="/#">
                                    <i className="fa fa-dribbble"></i>
                                </a>
                                <a href="/#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="/#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href="/#">
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
                    </form>
                </div>
            )}
        </>
    );
};

export default LoginForm;
