import React from "react";
import { useAuth } from "../Context/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { userToken, authSuccess } = useAuth();

	if (!userToken || userToken === "") {
		return <Navigate to="/login" />;
	} else {
		if (authSuccess === false) return <Navigate to="/login" />;
		else return children;
	}
};

export default ProtectedRoute;
