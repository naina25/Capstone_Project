import React, { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
	const [userToken, setUserToken] = useState(props.tokenData);

	return (
		<AuthContext.Provider value={{ userToken, setUserToken }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
