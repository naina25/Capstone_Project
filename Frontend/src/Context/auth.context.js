import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [userToken, setUserToken] = useState(props.tokenData);
    const [authSuccess, setAuthSuccess] = useState();
    useEffect(() => {
        const authUser = async () => {
            try {
                const decoded = await jwt_decode(userToken);
                await axios
                    .get(
                        `https://localhost:44387/api/Auth/${decoded.UserAadhar}`
                    )
                    .then((res) => {
                        if (res.status === 200) {
                            setAuthSuccess(true);
                        } else setAuthSuccess(false);
                    });
            } catch (error) {
                setAuthSuccess(false);
            }
        };
        authUser();
    }, [userToken]);

    return (
        <AuthContext.Provider value={{ userToken, setUserToken, authSuccess }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
