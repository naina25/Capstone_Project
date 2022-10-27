import React from "react";
import { useAuth } from "../Context/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { userToken } = useAuth();

	if (!userToken || userToken === "") {
		return <Navigate to="/login" />;
	}
	return children;
};

export default ProtectedRoute;
