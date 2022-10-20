import "./LoginForm.css";
import React from "react";

const LoginForm = () => {
    return (
        <div className="login-form-div">
            <div className="banner">
                <h2>Login to your Account</h2>
            </div>
            <form>
                <label>
                    Email
                    <input
                        className="login-input"
                        type="email"
                        name=""
                        placeholder="Enter your email"
                    />
                </label>
                <label>
                    Password
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter Password"
                    />
                </label>

                <button className="login-btn" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
